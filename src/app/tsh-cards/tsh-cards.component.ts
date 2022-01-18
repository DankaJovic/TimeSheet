import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'tsh-tsh-cards',
  templateUrl: './tsh-cards.component.html',
  styleUrls: ['./tsh-cards.component.css']
})
export class TshCardsComponent implements OnInit {

  message: string = "";

  constructor(private _Shared: SharedService) { }

  ngOnInit(): void {
    this._Shared.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(){
    this._Shared.changeMesage("Changed")
  }
  

}
