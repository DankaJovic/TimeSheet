import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Client } from 'src/app/model/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit{

  client: Client = new Client();

  registerClientForm!: FormGroup;

  newClients: Client[] = [];

constructor( private _Clients: ClientsService, private fb: FormBuilder,
  private dialogRef: MatDialogRef<ModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.createClientForm();
    
  }

ngOnInit(): void {
}

createClientForm(){
  this.registerClientForm = this.fb.group({
    'clientName': '',
    'address': '',
    'city': '',
    'postalZip': '',
    'country': ''
  })
}

onSave(){
let submittedClient: Client = new Client(this.registerClientForm.value)
this._Clients.addClients(submittedClient);
this.registerClientForm.reset();
}


}

