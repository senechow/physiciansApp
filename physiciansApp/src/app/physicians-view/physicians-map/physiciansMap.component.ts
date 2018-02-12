import { Component, OnInit, OnDestroy} from '@angular/core';
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
	msg : string;

	physicians: Physician[];
	physiciansSubscription: Subscription;

	constructor(
		private physicianService: PhysicianService,
		private geoCodingService: GeoCodingService
	) { }

	ngOnInit() {
		this.lat = 49.246292;
		this.long = -123.116226;

		this.physicians = this.physicianService.getPhysiciansList();
		this.physiciansSubscription = this.physicianService.physiciansListChanged
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
	}

	ngOnDestroy() {
		this.physiciansSubscription.unsubscribe;
	}

	getPhysicianCoordinates(physician : Physician) {

		let coords = this.geoCodingService.getCoordinates(physician.address, 
			physician.province, physician.city, physician.postalCode)
		.subscribe(coords => {
			if(coords.status === "OK") {
				this.lat = coords.lat;
				this.long = coords.long;
				this.msg = "Physician found!";
			} else {
				this.msg = "Physician was not found!"
			}
		});
		

	}

}