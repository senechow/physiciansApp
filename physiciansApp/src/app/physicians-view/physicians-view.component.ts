import { Component, OnInit } from '@angular/core';

import { PhysicianService } from '../_services/physician.service';

@Component({
  selector: 'app-physicians-view',
  templateUrl: './physicians-view.component.html',
  styleUrls: ['./physicians-view.component.css']
})
export class PhysiciansViewComponent implements OnInit {

  constructor(private physicianService: PhysicianService) { }

  ngOnInit() {
  }

}
