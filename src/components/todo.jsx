import connectToStores from 'alt/utils/connectToStores';
import React from 'react';
import TodoStore from 'stores/todo';
import TodoActions from 'actions/todo';
import {Container} from 'components/utils';
import {TextField,RaisedButton,List,ListItem,Checkbox,FontIcon} from 'material-ui';

class Todo extends React.Component{
    static getStores(){
        return [TodoStore];
    }

    static getPropsFromStores(){
        return TodoStore.getState();
    }
    constructor(props){
        super(props);
        this.state = {inputValue:''}
    }
    _create(){
        let text = this.refs.input.getValue();
        TodoActions.create(text);
        this.setState({inputValue:''});
    }
    _onInputChange(e){
        this.setState({inputValue:e.target.value});
    }
    render(){
        let todos = [];
        for(let id in this.props.todos){
            let todo = this.props.todos[id];
            todos.push(
                <ListItem key={id} primaryText={todo.text}
                    leftCheckbox={<Checkbox name={id} value={id} />}
                />
            );
        }
        return (
            <Container>
                <TextField 
                    hintText="What are you going to do?" 
                    ref='input' 
                    value={this.state.inputValue}
                    onChange={this._onInputChange.bind(this)}/>
                <RaisedButton label='Click' onTouchTap={this._create.bind(this)}/>
                <List subheader='Todo Lists'>
                    {todos}
                </List>
            </Container>
        );
    }
}

export let TodoView = connectToStores(Todo); 
