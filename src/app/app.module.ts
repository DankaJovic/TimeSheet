import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { TshCardsComponent } from './tsh-cards/tsh-cards.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ClientsService } from './services/clients.service';
import { ProjectsService } from './services/projects.service';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TshCardsComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  entryComponents: [ModalComponent],
  providers: [ClientsService, ProjectsService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
