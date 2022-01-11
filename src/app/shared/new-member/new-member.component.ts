import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tsh-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  modalOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen
  }

}
