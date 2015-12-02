import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Pad} from 'components/layout';
import MUI from 'material-ui';

let iconStyle={
    verticalAlign:'middle',
    marginRight:'10px'
}

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    reset(){
        this.refs.username.clearValue();
        this.refs.password.clearValue();   
    }
    render(){
        return(
            <MUI.Card>
                <MUI.CardTitle title='用户登陆' />
                <Row>
                   <Col>
                       <MUI.FontIcon className='fa fa-user' style={iconStyle}/>
                       <MUI.TextField 
                            ref='username'
                            hintText='用户名' 
                            onChange={()=>this.props.onChange(
                                'username',this.refs.username.getValue()
                            )} />
                   </Col>
                </Row>
                <Row>
                   <Col>
                       <MUI.FontIcon className='fa fa-eye-slash' style={iconStyle}/>
                       <MUI.TextField 
                            ref='password'
                            hintText='密码' 
                            type='password' 
                            onChange={()=>this.props.onChange(
                                'password',this.refs.password.getValue()
                            )}/>
                   </Col>
                </Row>
                <Pad vertical={true} pad={30} />
                <Row>
                   <Col xs={6}>
                       <MUI.RaisedButton label='登陆' secondary={true} />
                   </Col>
                   <Col xs={6}>
                       <MUI.RaisedButton label='重置' onClick={this.reset.bind(this)} />
                   </Col>
                </Row>
                <Pad vertical={true} pad={30} />
            </MUI.Card>
        );
    }
}


