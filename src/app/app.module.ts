import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { TshCardsComponent } from './tsh-cards/tsh-cards.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';



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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
