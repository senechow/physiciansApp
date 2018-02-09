import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Physician } from '../../../_models/physician';
import { PhysicianService } from '../../../_services/physician.service';

@Component({
  selector: 'app-physician-details',
  templateUrl: './physician-details.component.html',
  styleUrls: ['./physician-details.component.css']
})
export class PhysicianDetailsComponent implements OnInit {

  physician: Physician = Physician.CreateDefault();
  image : String = '';

  constructor(private router: Router,
  			  private route: ActivatedRoute,
  			  private physicianService: PhysicianService) { }

  ngOnInit() {
  	const id = this.route.snapshot.params['id'];

  	this.physicianService.getById(id).subscribe(physician =>{
			this.physician = physician;
			this.image = this.physician.imagePath ? this.physician.imagePath : 'assets/images/default-profile.jpg';
	});
  }

  onBack() {
  	this.router.navigate(['../'], { relativeTo: this.route });
  }


}
