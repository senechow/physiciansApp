import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Physician } from '../../../_models/physician';
import { PhysicianService } from '../../../_services/physician.service';

@Component({
  selector: 'app-physician-details',
  templateUrl: './physician-details.component.html',
  styleUrls: ['./physician-details.component.css']
})
export class PhysicianDetailsComponent implements OnInit {

  physician: Physician = Physician.CreateDefault();
  image: string = '';
  totalRating: string = '0';
  totalRatingCount: number = 0;
  userRating: number = 0;
  userRatingForm: FormGroup
  rated = false;

  constructor(private router: Router,
  			  private route: ActivatedRoute,
  			  private physicianService: PhysicianService) { }

  ngOnInit() {
  	this.userRatingForm = new FormGroup({
  		'userRatingControl': new FormControl('')
  	});
    this.route.params.subscribe(
        (params: Params) => {
          const id = params['id'];
          this.physicianService.getById(id).subscribe(physician =>{
            this.physician = physician;
            this.image = this.physician.imagePath ? this.physician.imagePath : 'assets/images/default-profile.jpg';
            this.totalRating = this.physician.rating ? this.physician.rating.toString().substr(0, 3) : '0';
            this.totalRatingCount = this.physician.ratingCount ? this.physician.ratingCount : 0;
          });
        }
    );
  }

  onBack() {
    this.physicianService.setActivePhysician(null);
  	this.router.navigate(['../'], { relativeTo: this.route });
  }

  onRate() {
  	this.rated = true;
  	const newTotalRating = this.totalRatingCount > 0 ? (this.physician.rating * this.physician.ratingCount) + this.userRatingForm.value.userRatingControl : this.userRatingForm.value.userRatingControl;
  	this.physician.ratingCount++;
  	this.physician.rating = newTotalRating / this.physician.ratingCount;
  	this.physicianService.update(this.physician._id, this.physician)
  		.subscribe((res) => {
  			this.totalRating = res.rating.toString().substr(0,3);
  			this.totalRatingCount = res.ratingCount;
  		});
  }


}
