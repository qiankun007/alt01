import alt from 'altInstance';

class TodoActions {
    create(text){
        if(!text) {
            return ;
        }
        let id = Date.now();
        let complete = false;
        return {id,text,complete};
    }
    update(id,text){
        return {id,text}
    }
    destroy(id){
        return id;
    }
}

export default alt.createActions(TodoActions);
