export class Physician {

	constructor(
		public _id: string,
	    public firstName: String,
	    public lastName: String,
	    public description: String,
	    public address: String,
	    public city: String,
	    public province: String,
	    public postalCode: String,
	    public phoneNumber: String,
	    public email: String
    ) {}

	static CreateDefault() : Physician {
		return new Physician('', '', '', '', '', '', '', '', '', '');
	}

}