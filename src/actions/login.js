import alt from 'altInstance';

class LoginActions {
    change(field,value){
        let obj = {};
        obj[field] = value;
        return obj;
    }
    validate(field){
        let rules = {
            username:['required','username','min=3','max=5']
        };
    }
    submit(){
    }
}

export default alt.createActions(LoginActions);
