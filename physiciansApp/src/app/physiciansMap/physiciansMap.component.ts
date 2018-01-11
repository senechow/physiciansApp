import { Component, OnInit} from '@angular/core';

import { Physician } from '../_models/physician';
import { PhysicianService } from '../_services/physician.service';

@Component({
	selector: 'physiciansMap',
	templateUrl: './physiciansMap.component.html',
	styleUrls: ['physiciansMap.component.css']
})
export class PhysiciansMap {

	constructor(
		private physicianService : PhysicianService
	) { }

}