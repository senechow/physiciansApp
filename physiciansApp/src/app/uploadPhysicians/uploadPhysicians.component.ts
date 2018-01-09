import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import { Physician } from '../_models/physician';
import { PhysicianService } from '../_services/physician.service';

@Component({
	selector: 'uploadPhysicians',
	templateUrl: './uploadPhysicians.component.html'
})
export class UploadPhysicianComponent implements OnInit {

	phys : Physician;
	physicianForm : FormGroup;
	firstNameInput : FormControl;
	lastNameInput : FormControl;
	addressInput : FormControl;
	provinceSelector: FormControl;
	cityInput : FormControl;
	postalCodeInput : FormControl;
	emailInput : FormControl;
	phoneNumberInput : FormControl;
	descriptionInput : FormControl;

	constructor(
		private physicianService : PhysicianService,
		private fb: FormBuilder
		) { }

	ngOnInit() {
		this.phys = Physician.CreateDefault();
		this.createFormControls();
		this.createForm();
	}

	createFormControls() {
		this.firstNameInput = new FormControl('', Validators.required);
		this.lastNameInput = new FormControl('', Validators.required);
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
		this.descriptionInput = new FormControl();

	}

	createForm() {

		this.physicianForm = new FormGroup({
			firstNameFormGroup: new FormGroup({
				firstNameInput: this.firstNameInput
			}),
			lastNameFormGroup: new FormGroup({
				lastNameInput: this.lastNameInput
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
		console.log(this.phys);
		this.physicianService.insert(this.phys)
			.subscribe(
				data => {
					console.log(this.phys);
					this.phys = Physician.CreateDefault();
				}
			)
	}
}