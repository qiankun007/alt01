import alt from 'altInstance';
import LoginActions from 'actions/login';
import assign from 'object-assign';

class LoginStore{
    constructor(){
        this.bindActions(LoginActions);
        this.user = {};
        this.validating = false;
        this.errors = {};
        this.loading = false;
    }

    onChange(user){
        this.user = assign(this.user,user);
    }
    onValidate(){
        this.validating = true;
    }
    onValidated(errors){
        this.errors = assign(this.errors,errors)
    }
    onSubmit(){
        // 先show loading
        this.loading = true;
        // 判断是否在validating 如果是的话 等待500ms 直到 validated 并且没有error
        while (this.validing){
        }
        for(let field in error){
            
        }    
    }

}

export default alt.createStore(LoginStore,'LoginStore');

