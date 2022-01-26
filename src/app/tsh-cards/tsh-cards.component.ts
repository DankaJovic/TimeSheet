import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientsService } from '../services/clients.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'tsh-tsh-cards',
  templateUrl: './tsh-cards.component.html',
  styleUrls: ['./tsh-cards.component.css']
})
export class TshCardsComponent implements OnInit {

  clients: Client[] = [];

  // message: string = "";

  constructor(private _Clients: ClientsService, private _Shared: SharedService) { }

  ngOnInit(): void {
    // this._Shared.currentMessage.subscribe(message => this.message = message)

  }

  showClients(){
    this._Clients.allClients
  }

  

}
