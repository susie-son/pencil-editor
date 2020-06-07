import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DatabaseService } from '../database.service';

import MediumEditor from 'medium-editor';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent {
  @Input() doc;
  @ViewChild('editable') editable;
  editor: MediumEditor;

  constructor(private dbService: DatabaseService) {}

  ngAfterViewInit() {
    const element = this.editable.nativeElement;
    this.editor = new MediumEditor(element);
    this.editor.subscribe('editableInput', (_event, editable) => {
      this.dbService.updateText(this.doc.id, editable.innerHTML);
    });
  }
}
