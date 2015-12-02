import connectToStores from 'alt/utils/connectToStores';
import React from 'react';
import TodoStore from 'stores/todo';
import TodoActions from 'actions/todo';
import {Container,Row,Col} from 'components/layout';
import {TextField,RaisedButton,List,ListItem,Checkbox,FontIcon} from 'material-ui';

const ENTER_KEY_CODE = 13;

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
    _create(e){
        if(e.keyCode !== ENTER_KEY_CODE){
            return;
        }
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
            <div>
                <Row>
                    <Col>
                        <TextField 
                            hintText="What are you going to do?" 
                            ref='input' 
                            fullWidth={true}
                            value={this.state.inputValue}
                            onChange={this._onInputChange.bind(this)}
                            onKeyDown={this._create.bind(this)}/>
                         
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <List subheader='Todo Lists'>
                            {todos}
                        </List>
                    </Col>
                </Row>
            </div>
        );
    }
}

export let TodoView = connectToStores(Todo); 
