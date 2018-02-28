import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import { Physician } from '../_models/physician';
import { PhysicianService } from '../_services/physician.service';
import { GeoCodingService } from '../_services/geocoding.service';

@Component({
	selector: 'uploadPhysicians',
	templateUrl: './uploadPhysicians.component.html'
})
export class UploadPhysicianComponent implements OnInit {

	physicianForm : FormGroup;
	firstNameInput : FormControl;
	lastNameInput : FormControl;
	imagePathInput : FormControl;
	addressInput : FormControl;
	provinceSelector: FormControl;
	cityInput : FormControl;
	postalCodeInput : FormControl;
	emailInput : FormControl;
	phoneNumberInput : FormControl;
	descriptionInput : FormControl;
	officeHoursMon : FormControl;
	officeHoursTue : FormControl;
	officeHoursWed : FormControl;
	officeHoursThu : FormControl;
	officeHoursFri : FormControl;
	officeHoursSat : FormControl;
	officeHoursSun : FormControl;
	officeHoursMonStartTime : FormControl;
	officeHoursMonEndTime : FormControl;
	officeHoursTueStartTime : FormControl;
	officeHoursTueEndTime : FormControl;
	officeHoursWedStartTime : FormControl;
	officeHoursWedEndTime : FormControl;
	officeHoursThuStartTime : FormControl;
	officeHoursThuEndTime : FormControl;
	officeHoursFriStartTime : FormControl;
	officeHoursFriEndTime : FormControl;
	officeHoursSatStartTime : FormControl;
	officeHoursSatEndTime : FormControl;
	officeHoursSunStartTime : FormControl;
	officeHoursSunEndTime : FormControl;

	invalidAddressMsg: string;
	physCreatedMsg: string;

	constructor(
		private physicianService : PhysicianService,
		private geocodingService : GeoCodingService
		) { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
	}

	createFormControls() {
		this.firstNameInput = new FormControl('', Validators.required);
		this.lastNameInput = new FormControl('', Validators.required);
		this.imagePathInput = new FormControl('');
		this.addressInput = new FormControl('', Validators.required);
		this.provinceSelector = new FormControl('', Validators.required);
		this.cityInput = new FormControl('', Validators.required);
		this.postalCodeInput = new FormControl('', [
			Validators.required,
			Validators.pattern('(^[A-Za-z]\\d[A-Za-z]\\d[A-Za-z]\\d$)|(^[A-Za-z]\\d[A-Za-z] \\d[A-Za-z]\\d$)')
		]);
		this.emailInput = new FormControl('', Validators.pattern('^\\w+([\.-]?\\w+)*@\\w+([\.-]?\\w+)*(\.\\w{2,3})+$'));
		this.phoneNumberInput = new FormControl('', [
			Validators.required,
			Validators.minLength(10),
			Validators.pattern("\\d+")
		]);
		this.descriptionInput = new FormControl('', Validators.maxLength(200));
		this.officeHoursMon = new FormControl('');
		this.officeHoursTue = new FormControl('');
		this.officeHoursWed = new FormControl('');
		this.officeHoursThu = new FormControl('');
		this.officeHoursFri = new FormControl('');
		this.officeHoursSat = new FormControl('');
		this.officeHoursSun = new FormControl('');
		this.officeHoursMonStartTime = new FormControl('');
		this.officeHoursMonEndTime = new FormControl('');
		this.officeHoursTueStartTime = new FormControl('');
		this.officeHoursTueEndTime = new FormControl('');
		this.officeHoursWedStartTime = new FormControl('');
		this.officeHoursWedEndTime = new FormControl('');
		this.officeHoursThuStartTime = new FormControl('');
		this.officeHoursThuEndTime = new FormControl('');
		this.officeHoursFriStartTime = new FormControl('');
		this.officeHoursFriEndTime = new FormControl('');
		this.officeHoursSatStartTime = new FormControl('');
		this.officeHoursSatEndTime = new FormControl('');
		this.officeHoursSunStartTime = new FormControl('');
		this.officeHoursSunEndTime = new FormControl('');

	}

	createForm() {

		this.physicianForm = new FormGroup({
			firstNameFormGroup: new FormGroup({
				firstNameInput: this.firstNameInput
			}),
			lastNameFormGroup: new FormGroup({
				lastNameInput: this.lastNameInput
			}),
			imagePathFormGroup: new FormGroup({
				imagePathInput: this.imagePathInput
			}),
			addressFormGroup: new FormGroup({
				addressInput: this.addressInput
			}),
			provinceFormGroup: new FormGroup({
				provinceSelector: this.provinceSelector
			}),
			cityFormGroup: new FormGroup({
				cityInput: this.cityInput
			}),
			postalCodeFormGroup: new FormGroup({
				postalCodeInput: this.postalCodeInput
			}),
			emailFormGroup: new FormGroup({
				emailInput: this.emailInput
			}),
			phoneNumberFormGroup: new FormGroup({
				phoneNumberInput: this.phoneNumberInput
			}),
			descriptionFormGroup: new FormGroup({
				descriptionInput: this.descriptionInput
			}),
			officeHoursFormGroup: new FormGroup({
				officeHoursMon: this.officeHoursMon,
				officeHoursMonStartTime: this.officeHoursMonStartTime,
				officeHoursMonEndTime: this.officeHoursMonEndTime,
				officeHoursTue: this.officeHoursTue,
				officeHoursTueStartTime: this.officeHoursTueStartTime,
				officeHoursTueEndTime:this.officeHoursTueEndTime,
				officeHoursWed: this.officeHoursWed,
				officeHoursWedStartTime: this.officeHoursWedStartTime,
				officeHoursWedEndTime: this.officeHoursWedEndTime,
				officeHoursThu: this.officeHoursThu,
				officeHoursThuStartTime: this.officeHoursThuStartTime,
				officeHoursThuEndTime: this.officeHoursThuEndTime,
				officeHoursFri: this.officeHoursFri,
				officeHoursFriStartTime: this.officeHoursFriStartTime,
				officeHoursFriEndTime: this.officeHoursFriEndTime,
				officeHoursSat: this.officeHoursSat,
				officeHoursSatStartTime: this.officeHoursSatStartTime,
				officeHoursSatEndTime: this.officeHoursSatEndTime,
				officeHoursSun: this.officeHoursSun,
				officeHoursSunStartTime: this.officeHoursSunStartTime,
				officeHoursSunEndTime: this.officeHoursSunEndTime,
			})
		});
	}

	insertPhysician() {

		let phys = this.buildPhysician();

		console.log(phys);
		this.geocodingService.getCoordinates(phys.address, phys.province, phys.city, phys.postalCode)
			.subscribe(coords => {
			if(coords.status === "OK") {
				this.onSuccessCoordsRetrieval(phys, coords);
					
			} else {
				console.log("physician not found!");
				this.invalidAddressMsg = "The address entered below was not found! Please double check the street address, province, city and postal code!"
				this.physCreatedMsg = "";
				document.body.scrollTop = document.documentElement.scrollTop = 0;

			}
		});
	}

	private buildPhysician() : Physician {
		let phys = Physician.CreateDefault();
		phys.firstName = this.firstNameInput.value;
		phys.lastName = this.lastNameInput.value;
		phys.imagePath = this.imagePathInput.value;
		phys.address = this.addressInput.value;
		phys.province = this.provinceSelector.value;
		phys.city = this.cityInput.value;
		phys.postalCode = this.postalCodeInput.value;
		phys.email = this.emailInput.value;
		phys.phoneNumber = this.phoneNumberInput.value;
		phys.description = this.descriptionInput.value;
		phys.officeHours = this.buildOfficeHours();
		return phys;
	}

	private buildOfficeHours(): {day: string, startTime: Date, endTime: Date}[] {

		let officeHours = [];
		const dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		for(let i = 0; i < dayOfWeek.length; i++) {
			console.log(this['officeHoursMon']);
			const dayChecked = this['officeHours' + dayOfWeek[i]].value;
			if(dayChecked) {
				let officeHour = {
					day: dayOfWeek[i],
					startTime: this['officeHours' + dayOfWeek[i] + 'StartTime'].value,
					endTime: this['officeHours' + dayOfWeek[i] + 'EndTime'].value
				}
				officeHours.push(officeHour);
			}
		}

		return officeHours;
	}

	private onSuccessCoordsRetrieval(phys: Physician, coords: any) {
		phys.lat = coords.lat;
		phys.long = coords.lng;
		console.log("physician found!");

		console.log(phys);

		this.physicianService.insert(phys)
			.subscribe(
				data => {
					console.log(phys);
					this.physicianForm.reset();
					this.invalidAddressMsg = "";
					this.physCreatedMsg = "The physician was created successfully!";
					document.body.scrollTop = document.documentElement.scrollTop = 0;
		});
	}
}