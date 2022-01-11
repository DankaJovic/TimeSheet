import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CategoriesHomeComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ],
  exports: []
})
export class CategoriesModule { }
