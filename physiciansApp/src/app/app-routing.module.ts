import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UploadPhysicianComponent } from './uploadPhysicians/uploadPhysicians.component';
import { PhysiciansViewComponent } from './physicians-view/physicians-view.component';
import { PhysiciansListComponent } from './physicians-view/physicians-list/physiciansList.component';
import { PhysicianDetailsComponent } from './physicians-view/physicians-list/physician-details/physician-details.component';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'uploadPhysicians', component: UploadPhysicianComponent },
	{ path: 'physicians-view', component: PhysiciansViewComponent, children: [
		{path: '', component: PhysiciansListComponent },
		{path: ':id', component: PhysicianDetailsComponent }
	]},

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