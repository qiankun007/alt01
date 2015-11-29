import React from 'react';
import ReactDOM from 'react-dom';

const Component = React.Component;

// style sheets
import 'flexboxgrid';

let toDashed = (str)=>str.replace(/([A-Z])/g, ($1)=>`-${$1.toLowerCase()}`);

export class Container extends Component {
    render(){
        return (
            <div className={this.props.fluid ? 'container-fluid':'container'}>
                {this.props.children}
            </div>
        );
    }
}

export class Row extends Component {
    render(){
        let classNames = ['row'];

        if(this.props.reverse){
            classNames.push('reverse');
        }

        let props = this.props;
        for(let prop in props){
            if(/^(start|center|end|top|middle|bottom|around|between)(Xs|Sm|Md|Lg)$/.test(prop)){
                if(props[prop]){
                    classNames.push(toDashed(prop));
                }
            }
        }

        return (
            <div className={classNames.join(' ')}>
                {this.props.children}
            </div>   
        );
    }
}

export class Col extends Component {
    render(){
        let classNames = [];
        let props = this.props;

        for(let prop in props){
            if(props[prop] && /^(first|last)(Xs|Sm|Md|Lg)$/.test(prop)){
                classNames.push(toDashed(prop));
            }            
            if(/^(xs|sm|md|lg)(Offset)?$/.test(prop)){
                classNames.push(`col-${toDashed(prop)}-${props[prop]}`);
            }
        } 

        if(classNames.length === 0 || this.props.auto){
            classNames.push('col-xs');
        }

        return (
            <div className={classNames.join(' ')}>
                {this.props.children}
            </div>
        );
    }
}

export class Pad extends Component {
    render(){
        let pad = this.props.pad + 'px';
        let style={
            display:this.props.vertical ? 'block':'inline-block',
            width:this.props.vertical ? '1px': pad,
            height:this.props.vertical ? pad : '1px'
        }
        return (
            <span style={style}></span>
        )
    }
}

















