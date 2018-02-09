import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Physician } from '../../../_models/physician';

@Component({
  selector: 'app-physician-list-item',
  templateUrl: './physician-list-item.component.html',
  styleUrls: ['./physician-list-item.component.css']
})
export class PhysicianListItemComponent implements OnInit {

  @Input() physician : Physician;
  image : String;

  constructor(private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.image = this.physician.imagePath ? this.physician.imagePath : 'assets/images/default-profile.jpg';
  }

  onClick() {
  	this.router.navigate([this.physician._id], {relativeTo: this.route})
  }


}
