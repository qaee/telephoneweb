import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContactService} from './services/contact.service';
import { ContactlistComponent } from './contactlist/contactlist.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialimportsModule} from './materialimports/materialimports.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialimportsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
