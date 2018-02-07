import { Component, OnInit} from '@angular/core';

import { Physician } from '../_models/physician';
import { GeoCodingService } from '../_services/geocoding.service';

@Component({
	selector: 'physiciansMap',
	templateUrl: './physiciansMap.component.html',
	styleUrls: ['physiciansMap.component.css']
})
export class PhysiciansMapComponent implements OnInit {

	lat : number;
	long : number;
	msg : string;

	constructor(
		private geoCodingService : GeoCodingService
	) { }

	ngOnInit() {
		this.lat = 49.246292;
		this.long = -123.116226;
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