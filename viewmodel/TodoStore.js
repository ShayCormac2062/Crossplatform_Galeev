// TodosStore.js
import { makeAutoObservable } from 'mobx';
import Todo from '../components/Todo';

class TodosStore {
    todos = [];
    completedTodos = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(text) {
        const todo = new Todo(text);
        this.todos.push(todo);
    }

    markAsCompleted(todo) {
        todo.markAsCompleted();
        this.completedTodos.push(todo);
        this.todos = this.todos.filter((t) => t !== todo); // удаляем задачу из списка активных задач
    }

    deleteTodo(todo) {
        this.todos = this.todos.filter((t) => t !== todo); // удаляем задачу из списка активных задач
    }
}

const todosStore = new TodosStore();
export default todosStore;
