import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Physician } from "../_models/Physician";
import { appConfig } from '../app.config';
import 'rxjs/add/operator/map';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class PhysicianService {

  constructor(private _http: Http) { }

    private physiciansList: Physician[] = [];
    private activePhysician: Physician;

    physiciansListChanged = new Subject<Physician[]>();
    activePhysicianChanged = new Subject<Physician>();

    getPhysiciansList() {
    	return this.physiciansList.slice();
    }

	getAll(searchStr?: string) {
		let params = {};
		if(searchStr) {
			params = {params: {searchStr: searchStr}}
		}
		return this._http.get(appConfig.apiUrl + '/api/physicians', params)
			.map((response: Response) =>{ 
				this.physiciansList = response.json().data;
				this.physiciansListChanged.next(this.physiciansList);
		});
	}

	getById(_id: string) {
		return this._http.get(appConfig.apiUrl + '/api/physicians/' + _id).map((response: Response) => response.json().data);
	}

	insert(physician: Physician) {
		return this._http.post(appConfig.apiUrl + '/api/physicians',physician);
	}

	update(_id: string, physician: Physician) {
		return this._http.put(appConfig.apiUrl + '/api/physicians/' + _id, physician).map((response: Response) => response.json().data);
	}

	delete(_id: string) {
		return this._http.delete(appConfig.apiUrl + '/api/physicians/' + _id);
	}

	setActivePhysician(physician: Physician) {
		this.activePhysician = physician;
		this.activePhysicianChanged.next(this.activePhysician);
	}

}