class Event {
    constructor (title, eventDate) {
        this._title = title;
        this._eventDate = eventDate;
        this._subscriber = [];
    }
    
    getDate () {
        return this._eventDate;
    }
    
    getTitle () {
        return this._title;
    }
    
    subscribe (...person) {
        for (var i = 0, nbPerson = person.length; i < nbPerson; i++) {            
            this._subscriber.push(person[i]);
        }
    }
    
    getNumberOfSubscriber () {
        return this._subscriber.length;
    }
}

export default Event;