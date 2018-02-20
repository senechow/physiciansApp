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
			})
		});
	}

	insertPhysician() {

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

		this.geocodingService.getCoordinates(phys.address, phys.province, phys.city, phys.postalCode)
			.subscribe(coords => {
			if(coords.status === "OK") {
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
					
			} else {
				console.log("physician not found!");
				this.invalidAddressMsg = "The address entered below was not found! Please double check the street address, province, city and postal code!"
				this.physCreatedMsg = "";
				document.body.scrollTop = document.documentElement.scrollTop = 0;

			}
		});

		

	}
}