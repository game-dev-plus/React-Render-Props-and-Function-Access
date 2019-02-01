import React ,{Component} from 'react';
import '../css/Person.css'
export default class Person extends Component{
    constructor(props) {
        super(props);
        this.state={
            hasChanged : false
        }
    }
    clicked=(ev)=>{
        ev.preventDefault();
        this.props.increment(this.props.name);
        this.setState({hasChanged:true});
    }
    render(){
        return(
            <div className="div-border">
                <p>
                    <span className="name">{this.props.name}</span>
                    <span className="count">{this.props.count}</span>
                </p>
                <button className="btn" onClick={this.clicked}>Add</button>
                {
                    this.state.hasChanged && (
                    <span className="corner-ribbon">Updated</span>
                )}
            </div>
        );
    }
}