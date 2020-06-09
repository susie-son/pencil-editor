import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KatexModule } from 'ng-katex';
import { SharedModule } from '../shared/shared.module';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocComponent } from './doc/doc.component';
import { EditorRoutingModule } from './editor-routing.module';
import { LatexComponent } from './latex/latex.component';

@NgModule({
  declarations: [DocListComponent, DocComponent, LatexComponent],
  imports: [CommonModule, EditorRoutingModule, SharedModule, KatexModule],
})
export class EditorModule {}
