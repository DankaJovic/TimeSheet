import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject("default message");

  currentMessage = this.messageSource.asObservable();

  private sharedClients = new BehaviorSubject("")

  constructor() { }

  changeMesage(message: string){
    this.messageSource.next(message)
  }
}
