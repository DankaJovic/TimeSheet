import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'tsh-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  curPage: number = 1;
  pageSize: number = 3;

  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  allClients: Client[] = []

  clientsToDisplay: Client[] = [];

  message: string = "";
  
  constructor(private _Clients: ClientsService, private _Shared: SharedService) {
    this._Shared.currentMessage.subscribe(message => this.message = message)
   }

  ngOnInit(): void {
    this.getAllClients()
    
    this._Shared.currentMessage.subscribe(message => this.message = message)
  }

  numberOfPages() {
    return Math.ceil(this.allClients.length / this.pageSize)
  }

  getAllClients(){
    this._Clients.getJSON().subscribe(data => {
      this.allClients = data;
      this.clientsToDisplay = this.allClients;
    })
  }

  getFirstLetter(letter:string){
    let firstLetter = this.allClients.filter(function(projectObj){
      return projectObj.clientName.charAt(0).toUpperCase() === letter.toUpperCase()
    })
    this.clientsToDisplay = firstLetter;
  }
}