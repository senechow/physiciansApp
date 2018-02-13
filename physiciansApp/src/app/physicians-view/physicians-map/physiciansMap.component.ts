import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Physician } from '../../_models/physician';
import { PhysicianService } from '../../_services/physician.service';
import { GeoCodingService } from '../../_services/geocoding.service';

@Component({
	selector: 'app-physicians-map',
	templateUrl: './physiciansMap.component.html',
	styleUrls: ['physiciansMap.component.css']
})
export class PhysiciansMapComponent implements OnInit, OnDestroy {

	lat : number;
	long : number;
	activeId: string;

	physicians: Physician[];
	physiciansListChangedSubscription: Subscription;
	activePhysicianChangedSubscription: Subscription;

	constructor(
		private physicianService: PhysicianService,
		private geoCodingService: GeoCodingService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.lat = 49.246292;
		this.long = -123.116226;

		this.physicians = this.physicianService.getPhysiciansList();
		this.physiciansListChangedSubscription = this.physicianService.physiciansListChanged
			.subscribe((physicians: Physician[]) =>{
				this.physicians = physicians;
				if(this.physicians 
					&& this.physicians.length
					&& this.physicians[0].lat
					&& this.physicians[0].long) {
					this.lat = physicians[0].lat;
					this.long = physicians[0].long;
				}
			});
		this.activePhysicianChangedSubscription = this.physicianService.activePhysicianChanged
			.subscribe((physician: Physician) => {
				if(physician && physician.lat
					&& physician.long) {
					this.lat = physician.lat;
					this.long = physician.long;
					this.activeId = physician._id;
				} else {
					this.activeId = null;
				}
			}); 
	}

	ngOnDestroy() {
		this.physiciansListChangedSubscription.unsubscribe;
		this.activePhysicianChangedSubscription.unsubscribe;
	}

	getPhysicianCoordinates(physician : Physician) {

		let coords = this.geoCodingService.getCoordinates(physician.address, 
			physician.province, physician.city, physician.postalCode)
		.subscribe(coords => {
			if(coords.status === "OK") {
				this.lat = coords.lat;
				this.long = coords.long;
			}
		});
	
	}

	onMarkerClick(physician: Physician) {
		console.log(physician);
		this.physicianService.setActivePhysician(physician);
		this.router.navigate(['physicians-view', physician._id]);

	}

}