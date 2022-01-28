import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title/card-title.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { AlphabetOrderComponent } from './alphabet-order/alphabet-order.component';
import { SearchMemberComponent } from './search-member/search-member.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardTitleComponent,
    ModalComponent,
    SearchMemberComponent,
    AlphabetOrderComponent,
    NewMemberComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CardTitleComponent,
    NewMemberComponent,
    SearchMemberComponent,
    AlphabetOrderComponent,
    ModalComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
