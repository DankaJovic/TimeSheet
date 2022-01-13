import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tsh-alphabet-order',
  templateUrl: './alphabet-order.component.html',
  styleUrls: ['./alphabet-order.component.css']
})
export class AlphabetOrderComponent implements OnInit {

  firstLetter: string = '';

  message: string = "";

  constructor() { }

  

  ngOnInit(): void {
  }

}
