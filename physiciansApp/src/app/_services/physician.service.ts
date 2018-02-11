import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Physician } from "../_models/Physician";
import { appConfig } from '../app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class PhysicianService {

  constructor(private _http: Http) { }

	getAll() {
		return this._http.get(appConfig.apiUrl + '/api/physicians').map((response: Response) => response.json().data);
	}

	getById(_id: string) {
		return this._http.get(appConfig.apiUrl + '/api/physicians/' + _id).map((response: Response) => response.json().data);
	}

	insert(physician: Physician) {
		console.log(physician);
		return this._http.post(appConfig.apiUrl + '/api/physicians',physician);
	}

	update(_id: string, physician: Physician) {
		return this._http.put(appConfig.apiUrl + '/api/physicians/' + _id, physician).map((response: Response) => response.json().data);
	}

	delete(_id: string) {
		return this._http.delete(appConfig.apiUrl + '/api/physicians/' + _id);
	}

}