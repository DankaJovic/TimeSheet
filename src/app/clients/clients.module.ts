import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsHomeComponent } from './clients-home/clients-home.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsModalComponent } from './clients-modal/clients-modal.component';
import { ClientsListComponent } from './clients-list/clients-list.component';


@NgModule({
  declarations: [
    ClientsHomeComponent,
    ClientsModalComponent,
    ClientsListComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ClientsModule { }
