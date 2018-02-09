import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UploadPhysicianComponent } from './uploadPhysicians/uploadPhysicians.component';
import { PhysiciansViewComponent } from './physicians-view/physicians-view.component';

const appRoutes : Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'uploadPhysicians', component: UploadPhysicianComponent },
	{ path: 'physicians-view', component: PhysiciansViewComponent },

	{ path: '**', redirectTo: ''}

];

export const routing = RouterModule.forRoot(appRoutes);