import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ColComponent} from '../../components/col/col.component'
import { GridComponent } from 'src/app/components/grid/grid.component';



@NgModule({
  declarations: [
    ColComponent,
    GridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColComponent,
    GridComponent
  ]
})
export class UikitModule { }
