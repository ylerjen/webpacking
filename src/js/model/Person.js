class Person {
    constructor (firstName, lastName, birthdate) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthdate = birthdate;
    }
    
    getFullName () {
        return this._firstName + " " + this._lastName;
    }
}

export default Person;