import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title/card-title.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { SearchMemberComponent } from './new-member/search-member/search-member.component';
import { AlphabetOrderComponent } from './alphabet-order/alphabet-order.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    CardTitleComponent,
    NewMemberComponent,
    SearchMemberComponent,
    AlphabetOrderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardTitleComponent,
    NewMemberComponent,
    SearchMemberComponent,
    AlphabetOrderComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
