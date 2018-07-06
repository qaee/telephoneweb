import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule, MatIconModule,} from '@angular/material'
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [
    MatTableModule,
    MatIconModule,
  ],
  declarations: []
})
export class MaterialimportsModule { }
