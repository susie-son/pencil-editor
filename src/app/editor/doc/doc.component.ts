import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { DatabaseService } from '../database.service';

import MediumEditor from 'medium-editor';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent implements AfterViewInit {
  @Input() doc;
  @ViewChild('editable') editable;
  editor: MediumEditor;

  constructor(private dbService: DatabaseService) {}

  ngAfterViewInit() {
    const element = this.editable.nativeElement;
    this.editor = new MediumEditor(element);
    this.editor.subscribe('editableInput', (_, editable) => {
      this.dbService.updateText(this.doc.id, editable.innerHTML);
    });
  }
}
