import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Physician } from '../_models/physician';
import { PhysicianService } from '../_services/physician.service';

@Component({
	selector: 'physiciansSearch',
	templateUrl: './physiciansSearch.component.html',
	styleUrls: ['./physiciansSearch.component.css']
})
export class PhysiciansSearchComponent {

	physicians: Physician[] = [];

	constructor(
		private router: Router,
		private physicianService : PhysicianService
	) { }

	searchPhysicians() {
		this.router.navigate(['/physicians-view']);
	}
}