import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject<string>("default message");

  currentMessage = this.messageSource.asObservable();

  constructor(private sharedService: SharedService) { }

  changeMesage(message: string){
    this.messageSource.next(message)
  }
  
}
