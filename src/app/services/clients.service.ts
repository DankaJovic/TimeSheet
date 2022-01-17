import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data)
    })
   }

  ngOnInit(): void {
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/json/clientsJson.json")
  }

}
