import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UploadPhysicianComponent } from './uploadPhysicians/uploadPhysicians.component';
import { PhysicianComponent } from './physicians/physicians.component';

const appRoutes : Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'uploadPhysicians', component: UploadPhysicianComponent },
	{ path: 'physicians', component: PhysicianComponent },

	{ path: '**', redirectTo: ''}

];

export const routing = RouterModule.forRoot(appRoutes);