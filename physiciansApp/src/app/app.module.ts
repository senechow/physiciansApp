import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { appConfig } from './app.config';

import { PhysicianService } from './_services/physician.service';
import { GeoCodingService } from './_services/geocoding.service';
import { StarRatingModule } from 'angular-star-rating';

import { HomeComponent } from './home/home.component';
import { PhysiciansMapComponent } from './physicians-view/physicians-map/physiciansMap.component';
import { PhysiciansListComponent } from './physicians-view/physicians-list/physiciansList.component';
import { UploadPhysicianComponent } from './uploadPhysicians/uploadPhysicians.component';
import { PhysiciansUploadLinkComponent } from './physiciansUploadLink/physiciansUploadLink.component';
import { PhysiciansSearchComponent } from './physiciansSearch/physiciansSearch.component';
import { PhysicianListItemComponent } from './physicians-view/physicians-list/physician-list-item/physician-list-item.component';
import { PhysicianDetailsComponent } from './physicians-view/physicians-list/physician-details/physician-details.component';
import { PhysiciansViewComponent } from './physicians-view/physicians-view.component';
import { PhysiciansSearchBarComponent } from './physicians-view/physicians-search-bar/physicians-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhysiciansMapComponent,
    PhysiciansListComponent,
    UploadPhysicianComponent,
    PhysiciansUploadLinkComponent,
    PhysiciansSearchComponent,
    PhysicianListItemComponent,
    PhysicianDetailsComponent,
    PhysiciansViewComponent,
    PhysiciansSearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: appConfig.googleAPIKey
    }),
    StarRatingModule.forRoot()
  ],
  providers: [
  	PhysicianService,
    GeoCodingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }