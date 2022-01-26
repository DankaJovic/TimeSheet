import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  allClients: Client[] = []

  lastId = 23;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data:Client[]) => {
      this.allClients = data;
    })
   }

  ngOnInit(): void {
   this.getJSON()
  }

  getJSON(): Observable<any> {
    console.log("clients service: getjson")
    return this.http.get("./assets/json/clientsJson.json");
    // return this.http.get("./assets/json/clientsJson.json");
  }


  addClients(newClient: Client){
    // this.lastId += 1;
    // newClient._id = this.lastId;
    // this.allClients.push(newClient); 
  }
}
