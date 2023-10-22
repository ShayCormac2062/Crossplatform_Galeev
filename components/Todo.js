import { makeAutoObservable } from 'mobx';

class Todo {
    text = '';
    completed = false;
    image = '';

    constructor(text) {
        this.text = text;
        makeAutoObservable(this);
    }

    markAsCompleted() {
        this.completed = true;
    }

    setImage(imageUri) {
        this.image = imageUri;
    }
}

export default Todo;
