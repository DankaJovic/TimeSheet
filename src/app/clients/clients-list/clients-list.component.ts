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

  curPage: number = 1;
  pageSize: number = 3;

  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  // clients: { clientName: string, postalZip: number, address: string, country: string }[] = clientsJson;

  // clientsToDisplay: { clientName: string, postalZip: number, address: string, country: string }[] = [];

  allClients: Client[] = []
  
  constructor(private _Clients: ClientsService) { }

  ngOnInit(): void {
    this.getAllClients()
  }

  numberOfPages() {
    return Math.ceil(this.allClients.length / this.pageSize)
  }

  // initializeClients(){
  //   this.clientsToDisplay = this.clients;
  // }

  // onLetterClick(letter: string){
  //   this.clientsToDisplay = [];

  //   for(let i = 0; i < this.clients.length; i++) {
  //     let firstLetter = this.clients[i].clientName.charAt(0).toUpperCase();
  //     if(firstLetter === letter.toUpperCase()){
  //       this.clientsToDisplay.push(this.clients[i]);
  //     }
  //   }
  // }

  getAllClients(){
    this._Clients.getJSON().subscribe(data => {
      this.allClients = data
    })
  }

}