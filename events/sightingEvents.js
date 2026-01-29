import { EventEmitter } from 'node:events';
import { createAlert } from '../utils/createAlerts.js'

export const sightingEvents = new EventEmitter();   //create an event

sightingEvents.on('sighting-added', createAlert);  // here we registerd the listener funciton(createAlert) with an event called 'sighting-added. Now we can call that event any where in the application