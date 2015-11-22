import React from 'react';
import ReactDOM from 'react-dom';

export class Container extends React.Component {
    render(){
        return (
            <div style={{}}>{this.props.children}</div>        
        );
    }
}
