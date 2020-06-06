import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocComponent } from './doc/doc.component';

@NgModule({
  declarations: [DocListComponent, DocComponent],
  imports: [CommonModule, EditorRoutingModule, SharedModule],
})
export class EditorModule {}
