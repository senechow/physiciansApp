import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';

import {PhysicianService} from './_services/physician.service';

import {HomeComponent} from './home/home.component';
import {PhysicianComponent} from './physicians/physicians.component';
import {UploadPhysicianComponent} from './uploadPhysicians/uploadPhysicians.component';
import {PhysiciansUploadLinkComponent} from './physiciansUploadLink/physiciansUploadLink.component';
import {PhysiciansSearchComponent} from './physiciansSearch/physiciansSearch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhysicianComponent,
    UploadPhysicianComponent,
    PhysiciansUploadLinkComponent,
    PhysiciansSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
  	PhysicianService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }