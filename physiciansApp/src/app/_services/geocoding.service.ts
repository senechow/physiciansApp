import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { appConfig } from '../app.config';

@Injectable()
export class GeoCodingService {

	 constructor(private _http: Http) { }

	 getCoordinates(address : String, 
	 	province : String, city : String,  postalCode : String) {

	 	const formattedAddress = address.replace(/ /g, '+');
	 	const formattedProvince = province.replace(/ /g, '+');
	 	const formattedCity = city.replace(/ /g, '+');
	 	const formattedPostalCode = postalCode.replace(/ /g, '+');

	 	let url = appConfig.googleGeoCodingUrl + "?address=" + formattedAddress
	 		+ "&components=country:CA|administrative_area_level_1:" + formattedProvince + "|locality:" + formattedCity +  "|postal_code:" + formattedPostalCode
	 		+ "&key=" + appConfig.googleAPIKey;
	 	console.log('GET ' + url);

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