import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { appConfig } from './app.config';

import { PhysicianService } from './_services/physician.service';
import { GeoCodingService } from './_services/geocoding.service';

import { HomeComponent } from './home/home.component';
import { PhysiciansComponent } from './physicians/physicians.component';
import { PhysiciansMap } from './physiciansMap/physiciansMap.component';
import { PhysiciansListComponent } from './physiciansList/physiciansList.component';
import { UploadPhysicianComponent } from './uploadPhysicians/uploadPhysicians.component';
import { PhysiciansUploadLinkComponent } from './physiciansUploadLink/physiciansUploadLink.component';
import { PhysiciansSearchComponent } from './physiciansSearch/physiciansSearch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhysiciansComponent,
    PhysiciansMap,
    PhysiciansListComponent,
    UploadPhysicianComponent,
    PhysiciansUploadLinkComponent,
    PhysiciansSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: appConfig.googleAPIKey
    })
  ],
  providers: [
  	PhysicianService,
    GeoCodingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }