import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource,
  MatTableModule,
  MatIconModule,
  MatSortModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatSortModule
  ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatSortModule
  ],
  declarations: []
})
export class MaterialimportsModule { }
