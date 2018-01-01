import { Component, OnInit } from '@angular/core';

import { Physician } from '../_models/physician';
import { PhysicianService } from '../_services/physician.service';

@Component({
	selector: 'uploadPhysicians',
	templateUrl: './uploadPhysicians.component.html'
})
export class UploadPhysicianComponent implements OnInit {

	phys : Physician;

	constructor(
		private physicianService : PhysicianService
		) { }

	ngOnInit() {
		this.phys = Physician.CreateDefault();
	}

	insertPhysician() {
		this.physicianService.insert(this.phys)
			.subscribe(
				data => {
					console.log(this.phys);
					this.phys = Physician.CreateDefault();
				}
			)
	}

}