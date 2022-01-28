import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsHomeComponent } from './clients-home/clients-home.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewMemberComponent } from '../shared/new-member/new-member.component';


@NgModule({
  declarations: [
    ClientsHomeComponent,
    ClientsListComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    NgbModule,
  ],
  exports: []
})
export class ClientsModule { }
