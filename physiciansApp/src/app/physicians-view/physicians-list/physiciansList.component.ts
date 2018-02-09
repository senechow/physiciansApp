import { Component, OnInit} from '@angular/core';

import { Physician } from '../../_models/physician';
import { PhysicianService } from '../../_services/physician.service';

@Component({
	selector: 'physiciansList',
	templateUrl: './physiciansList.component.html'
})
export class PhysiciansListComponent implements OnInit {

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