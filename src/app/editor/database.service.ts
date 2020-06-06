import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

import { Document } from './doc.model';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  createDoc(user: User) {
    return this.db.collection<Document>('documents').add({
      id: user.uid,
      text:
        '<div #editable><p>Start editing this to see some magic happen :)</p></div>',
    });
  }

  updateText(docId: string, text: string) {
    return this.db
      .collection<Document>('documents')
      .doc(docId)
      .update({ text });
  }

  getUserDocs() {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<Document>('documents', (ref) =>
              ref.where('id', '==', user.uid)
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }
}
