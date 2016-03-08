import Event from './model/Event.js';
import Person from './model/Person.js';

var yann = new Person('Yann', 'Lerjen');
var fiesta = new Event('Fiesta', new Date());

fiesta.subscribe(yann);

var parag = document.createElement('p');
parag.innerHTML = 'Subscribers nb : ' + fiesta.getNumberOfSubscriber();
document.getElementById('subscriber').appendChild(parag);