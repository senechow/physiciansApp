import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Physician } from '../_models/physician';
import { PhysicianService } from '../_services/physician.service';

@Component({
	selector: 'physiciansSearch',
	templateUrl: './physiciansSearch.component.html',
	styleUrls: ['./physiciansSearch.component.css']
})
export class PhysiciansSearchComponent {

	@ViewChild('searchForm') searchForm : NgForm;

	physicians: Physician[] = [];

	constructor(
		private router: Router,
		private physicianService : PhysicianService
	) { }

	searchPhysicians() {
		const searchStr = this.searchForm.value.searchPhysicians;
		this.physicianService.getAll(searchStr).subscribe();
		this.router.navigate(['/physicians-view']);
	}
}