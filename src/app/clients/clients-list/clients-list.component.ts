import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'tsh-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit{

  prevPage: number = 1;
  nextPage: number = 1;
  curPage: number = 1;
  pageSize: number = 3;

  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  allClients: Client[] = []

  clientsToDisplay: Client[] = [];

  
  constructor(private _Clients: ClientsService, private _Shared: SharedService) {
   }

  ngOnInit(): void {
    this.getAllClients()
    // this._Shared.currentMessage.subscribe(message => this.message = message)
  }

  getAllClients(){
    this.allClients = this._Clients.allClients;
    this.clientsToDisplay = this.allClients;
    console.log("clients-list: getall");
      // this.allClients = data;
    console.log(this.allClients);
  }

  numberOfPages() {
    return Math.ceil(this.allClients.length / this.pageSize)
  }

  getFirstLetter(letter:string){
    let firstLetter = this.allClients.filter(function(projectObj){
      return projectObj.clientName.charAt(0).toUpperCase() === letter.toUpperCase()
    })
    this.clientsToDisplay = firstLetter;
  }
}