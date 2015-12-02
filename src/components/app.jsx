import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import FlatButton from 'material-ui/lib/flat-button';
import Home from 'components/home';

import {createHistory} from 'history';
import history from 'historyInstance';

export default class App extends React.Component {
    render(){
        return (
            <div>
                <AppBar title='AltReactRouter' iconElementRight={
                    <IconMenu iconButtonElement={
                        <IconButton>
                            <FontIcon className="fa fa-ellipsis-v" />
                        </IconButton>
                    } onItemTouchTap={(e,i)=>{
                        let link = i.props.value;
                        console.log(i.props.value);
                        if(link === '/logout'){
                            console.log('do logout ...');
                            return;
                        }
                        // history.transitionTo(i.props.value);
                        history.pushState(null, i.props.value);
                    }}>
                        <MenuItem primaryText='首页' value='/' />
                        <MenuItem primaryText='个人资料' value='/profile'/>
                        <MenuItem primaryText='我的好友' value='/friends'/>
                        <MenuItem primaryText='退出登陆' value='/logout'/>
                        <MenuItem primaryText='帮助' value='/help'/>
                        <MenuItem primaryText='关于' value='/about'/>
                    </IconMenu>
                } />
                {this.props.children||<Home />}
            </div>
        );
    }
}
