import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownNavigatorDemoBasicComponent } from './markdown-navigator-demo-basic/markdown-navigator-demo-basic.component';
import { MarkdownNavigatorDemoEditorComponent } from './markdown-navigator-demo-editor/markdown-navigator-demo-editor.component';
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { MarkdownNavigatorDemoComponent } from './markdown-navigator-demo.component';
import { MarkdownNavigatorDemoRoutingModule } from './markdown-navigator-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MarkdownNavigatorDemoComponent,
    MarkdownNavigatorDemoBasicComponent,
    MarkdownNavigatorDemoEditorComponent,
  ],
  imports: [
    DemoModule,
    MarkdownNavigatorDemoRoutingModule,
    /** Covalent Modules */
    CovalentMarkdownNavigatorModule,
    CovalentCodeEditorModule,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
  ],
})
export class MarkdownNavigatorDemoModule {}
