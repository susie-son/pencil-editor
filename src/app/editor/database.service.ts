import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, map } from 'rxjs/operators';

import { Document } from './doc.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  async createDoc(data: Document) {
    const user = await this.afAuth.currentUser;
    return this.db.collection('documents').add({
      ...data,
      uid: user.uid,
      text: '',
    });
  }

  updateText(docId: string, text: string) {
    return this.db.collection('documents').doc(docId).update({ text });
  }

  getUserDocs() {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<Document>('documents', (ref) =>
              ref.where('uid', '==', user.uid)
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }
}
