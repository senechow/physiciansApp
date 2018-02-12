import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Physician } from '../../_models/physician';
import { PhysicianService } from '../../_services/physician.service';

@Component({
	selector: 'physiciansList',
	templateUrl: './physiciansList.component.html'
})
export class PhysiciansListComponent implements OnInit, OnDestroy {

	physicians: Physician[];
	physiciansSubscription: Subscription;

	constructor(
		private physicianService : PhysicianService
	) { }

	ngOnInit() {
		this.physicians = this.physicianService.getPhysiciansList();
		this.physiciansSubscription = this.physicianService.physiciansListChanged
			.subscribe((physicians: Physician[]) =>{
				this.physicians = physicians;
			});
	}

	ngOnDestroy() {
    	this.physiciansSubscription.unsubscribe;
 	}


}