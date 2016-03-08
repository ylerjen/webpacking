class Event {
    constructor (title, eventDate) {
        this.title = title;
        this.eventDate = eventDate;
        this.subscriber = [];
    }
    
    getDate () {
        return this.eventDate;
    }
    
    getTitle () {
        return this.title;
    }
    
    subscribe (person) {
        this.subscriber.push(person);
    }
    
    getNumberOfSubscriber () {
        return this.subscriber.length;
    }
}

export default Event;