import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UploadPhysicianComponent } from './uploadPhysicians/uploadPhysicians.component';
import { PhysiciansComponent } from './physicians/physicians.component';

const appRoutes : Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'uploadPhysicians', component: UploadPhysicianComponent },
	{ path: 'physicians', component: PhysiciansComponent },

	{ path: '**', redirectTo: ''}

];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}