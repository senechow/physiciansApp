import { Component, OnInit} from '@angular/core';

import { Physician } from '../_models/physician';
import { PhysicianService } from '../_services/physician.service';

@Component({
	selector: 'physicians',
	templateUrl: './physicians.component.html'
})
export class PhysicianComponent implements OnInit {

	physicians: Physician[] = [];

	constructor(
		private physicianService : PhysicianService
	) { }

	ngOnInit() {
		this.getAll();
	}

	getAll() {
		this.physicianService.getAll()
		.subscribe(physicians =>{
			this.physicians = physicians;
		});
	}


}