import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PhysicianService } from '../../_services/physician.service';
import { GeoCodingService } from '../../_services/geocoding.service';

@Component({
  selector: 'app-physicians-search-bar',
  templateUrl: './physicians-search-bar.component.html',
  styleUrls: ['./physicians-search-bar.component.css']
})
export class PhysiciansSearchBarComponent implements OnInit {

  @ViewChild('searchForm') searchForm : NgForm;

  constructor(private physicianService: PhysicianService,
  		      private geocodingService: GeoCodingService) { }

  ngOnInit() {
  }

  searchPhysicians() {
  	const searchStr = this.searchForm.value.searchPhysicians;
  	this.physicianService.getAll(searchStr).subscribe();
  }

}
