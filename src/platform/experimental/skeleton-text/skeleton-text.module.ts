import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdSkeletonTextComponent } from './skeleton-text.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdSkeletonTextComponent,
  ],
  exports: [
    TdSkeletonTextComponent,
  ],
})
export class TdSkeletonTextModule {

}
