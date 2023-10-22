import { makeAutoObservable } from 'mobx';

class EventLogStore {
    events = [];

    constructor() {
        makeAutoObservable(this);
    }

    logEvent(event) {
        this.events.push(event);
    }
}

const eventLogStore = new EventLogStore();
export default eventLogStore;
