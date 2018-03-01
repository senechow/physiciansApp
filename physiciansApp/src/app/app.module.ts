import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { appConfig } from './app.config';

import { PhysicianService } from './_services/physician.service';
import { GeoCodingService } from './_services/geocoding.service';
import { AuthorizationService } from './_services/authorization.service';

import { StarRatingModule } from 'angular-star-rating';
import { GoogleSignInComponent } from 'angular-google-signin';
import { AgmCoreModule } from '@agm/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

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
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

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
    PhysiciansSearchBarComponent,
    LoginComponent,
    GoogleSignInComponent,
    HeaderComponent,
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
    StarRatingModule.forRoot(),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [
  	PhysicianService,
    GeoCodingService,
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }