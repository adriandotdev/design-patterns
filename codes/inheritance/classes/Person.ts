export default class Person {

    private _givenName: string;
    private _middleName: string | "N/A";
    private _lastName: string;
    private _dateOfBirth: Date;
    private _address: string;

    constructor(givenName: string, middleName: string, lastName: string, dateOfBirth: Date, address: string) {

        this._givenName = givenName;
        this._middleName = middleName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this._address = address
    }

    public get givenName() {
        return this._givenName;
    }

    public get middleName() {
        return this._middleName;
    }

    public get lastName() {
        return this._lastName;
    }

    public get dateOfBirth() {
        return this._dateOfBirth;
    }
}

const testP = new Person("Adrian Nads", "Lauriano", "Marcelo", new Date("2000-11-23"), "Cabuyao City");
