import alt from 'altInstance';
import TodoActions from 'actions/todo';

class TodoStore{
    constructor(){
        this.bindActions(TodoActions);
        this.todos = {};
    }

    onCreate(todo){
        this.todos[todo.id] = todo;
    }
    onUpdate(todo){
        this.todos[todo.id] = todo;
    }

    onDestroy(id){
        delete this.todos[id];
    }
}

export default alt.createStore(TodoStore,'TodoStore');

