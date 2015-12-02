import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router,Route,Link} from 'react-router';
import history from 'historyInstance';

import App from 'components/app';

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';

injectTapEventPlugin();

const profileRoute = {
    path: 'profile',
    getComponent(location,cb){
        require.ensure([],(require)=>{
            cb(null,require('components/profile').default);
        });
    }
}

const friendsRoute = {
    path:'friends',
    getComponent(location,cb){
        require.ensure([],(require)=>{
            cb(null,require('components/friends').default); 
        });
    }
}

const helpRoute = {
    path:'help',
    getComponent(location,cb){
        require.ensure([],(require)=>{
            cb(null,require('components/help').default);
        });
    }
}

const aboutRoute = {
    path:'about',
    getComponent(location,cb){
        require.ensure([],(require)=>{
            cb(null,require('components/about').default);
        });
    }
}

const rootRoute = {
    component:'div',
    childRoutes:[{
        path:'/',
        component:App,
        childRoutes:[
            profileRoute,
            friendsRoute,
            helpRoute,
            aboutRoute
        ]
    }]
}

ReactDOM.render(
    <Router history={history} routes={rootRoute} />,
    document.getElementById('body')
);
