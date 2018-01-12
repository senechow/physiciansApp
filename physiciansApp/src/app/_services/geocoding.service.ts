import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { appConfig } from '../app.config';

@Injectable()
export class GeoCodingService {

	 constructor(private _http: Http) { }

	 getCoordinates(address : String, 
	 	province : String, city : String,  postalCode : String) {

	 	let url = appConfig.googleGeoCodingUrl + "?address=" + address.split(' ').join('+')
	 		+ "&components=country:CA|administrative_area_level_1:" + province + "|locality:" + city +  "|postal_code:" + postalCode
	 		+ "&key=" + appConfig.googleAPIKey;

	 	return this._http.get(url)
	 		.map((response : Response) => {
	 			console.log(response.json());

	 			var resJson = response.json();
	 			if(resJson.status === "OK") {
	 				var result = resJson.results[0];
	 				var coords = result.geometry.location;
	 				coords.status = resJson.status;
	 				return coords;

	 			} else {
	 				return resJson;
	 			}

	 		});

	 }

}