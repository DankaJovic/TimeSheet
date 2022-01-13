import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import clientsJson from '../../../assets/json/clientsJson.json';



@Component({
  selector: 'tsh-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: { clientName: string, postalZip: number, address: string, country: string }[] = clientsJson;

  curPage: number = 1;
  pageSize: number = 3;

  constructor(private _Clients: ClientsService) { }

  ngOnInit(): void {
  }

  numberOfPages() {
    return Math.ceil(this.clients.length / this.pageSize)
  }


}
