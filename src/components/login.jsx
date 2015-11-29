import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Pad} from 'components/layout';
import MUI from 'material-ui';

let iconStyle={
    verticalAlign:'middle',
    marginRight:'10px'
}

export default class Login extends React.Component {
    render(){
        return(
            <MUI.Card>
                <MUI.CardTitle title='用户登陆' />
                <Row>
                   <Col>
                       <MUI.FontIcon className='fa fa-user' style={iconStyle}/>
                       <MUI.TextField hintText='用户名' />
                   </Col>
                </Row>
                <Row>
                   <Col>
                       <MUI.FontIcon className='fa fa-eye-slash' style={iconStyle}/>
                       <MUI.TextField hintText='密码' type='password'/>
                   </Col>
                </Row>
                <Pad vertical={true} pad={30} />
                <Row>
                   <Col xs={6}>
                       <MUI.RaisedButton label='登陆' secondary={true} />
                   </Col>
                   <Col xs={6}>
                       <MUI.RaisedButton label='重置' />
                   </Col>
                </Row>
                <Pad vertical={true} pad={30} />
            </MUI.Card>
        );
    }
}


