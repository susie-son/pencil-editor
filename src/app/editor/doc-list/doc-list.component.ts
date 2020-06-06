import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Document } from '../doc.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.scss'],
})
export class DocListComponent implements OnInit, OnDestroy {
  docs: Document[];
  sub: Subscription;

  constructor(public dbService: DatabaseService) {}

  ngOnInit() {
    this.sub = this.dbService
      .getUserDocs()
      .subscribe((docs) => (this.docs = docs));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
