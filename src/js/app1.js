import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {TodoView} from 'components/todo';
import TodoActions from 'actions/todo';
import {Container,Row,Col,Pad} from 'components/layout';
import MUI from 'material-ui';
import Login from 'components/login';
 
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';

injectTapEventPlugin();

ReactDOM.render(
    <div>
        <MUI.AppBar iconElementLeft={
            <MUI.IconButton>
                <MUI.FontIcon className='fa fa-heart' />
            </MUI.IconButton>
        } title='Alt01'
        />
        <Container>
            <Row centerXs={true}>
                <Col sm={4} xs={12}>
                    <Pad vertical={true} pad={100} />
                    <Login />
                </Col>
            </Row>
        </Container>
    </div>,
    document.getElementById('content')
);
