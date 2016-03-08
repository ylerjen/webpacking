class Person {
    constructor (firstName, lastName, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
    }
    
    getFullName () {
        return this.firstName + " " + this.lastName;
    }
}

export default Person;