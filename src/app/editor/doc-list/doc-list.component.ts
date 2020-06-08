import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { DatabaseService } from '../database.service';
import { Document } from '../doc.model';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.scss'],
})
export class DocListComponent implements OnInit, OnDestroy {
  doc: Document;
  sub: Subscription;

  constructor(
    public afAuth: AngularFireAuth,
    public dbService: DatabaseService
  ) {}

  ngOnInit() {
    this.sub = this.dbService
      .getUserDocs()
      .subscribe((docs) => (this.doc = docs[0]));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async newDocument() {
    const user = await this.afAuth.currentUser;
    this.dbService.createDoc(user);
  }

  async deleteDocument() {
    const user = await this.afAuth.currentUser;
    this.dbService.deleteDoc(this.doc.id);
  }
}
