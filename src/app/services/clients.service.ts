import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  ngOnInit(): void {
  }

  // getClients(): Observable<Client[]>{
  //   return this.http.get<Client[]>('assets/json/clientsJson.json')
  // }


}
