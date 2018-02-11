export class Physician {

	constructor(
		public _id: string,
	    public firstName: string,
	    public lastName: string,
	    public description: string,
	    public address: string,
	    public city: string,
	    public province: string,
	    public postalCode: string,
	    public phoneNumber: string,
	    public email: string,
	    public lat: number,
	    public long: number,
	    public imagePath: string,
	    public ratingCount: number,
	    public rating: number,
    ) {}

	static CreateDefault() : Physician {
		return new Physician('', '', '', '', '', '', '', '', '', '', null, null, '', null, null);
	}

}