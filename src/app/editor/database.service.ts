import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { switchMap } from 'rxjs/operators';
import { Document } from './doc.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  createDoc(user: User) {
    return this.db.collection<Document>('documents').add({
      id: user.uid,
      text: '<p>Start editing this to see some magic happen :)</p>',
      time: new Date(),
    });
  }

  deleteDoc(docId: string) {
    return this.db.collection<Document>('documents').doc(docId).delete();
  }

  updateText(docId: string, text: string) {
    return this.db
      .collection<Document>('documents')
      .doc(docId)
      .update({ text, time: new Date() });
  }

  getUserDocs() {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<Document>('documents', (ref) =>
              ref.where('id', '==', user.uid).orderBy('time', 'desc')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }
}
