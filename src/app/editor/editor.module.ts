import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocComponent } from './doc/doc.component';
import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  declarations: [DocListComponent, DocComponent],
  imports: [CommonModule, EditorRoutingModule, SharedModule],
})
export class EditorModule {}
