import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { DocListComponent } from './doc-list/doc-list.component';

@NgModule({
  declarations: [DocListComponent],
  imports: [CommonModule, EditorRoutingModule],
})
export class EditorModule {}
