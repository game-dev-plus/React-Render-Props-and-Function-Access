import React ,{Component} from 'react';

export default class BigBrother extends Component{
    constructor(){
        super();
        this.state={
            toys:['Lego','Ball'],
            SelectedToy:null
        }
    }
    HandleMouseMove=(ev)=>
    {
        let toy = this.state.SelectedToy;
        if (ev.clientX>500) {
            toy = this.state.toys[0];
        } else {
            toy = this.state.toys[1];            
        }
        this.setState({SelectedToy:toy});
    }  
    handleMouseLeave=(ev)=>{
        this.setState({SelectedToy:null});
    }  
    render(){
        return(
            <div onMouseMove={this.HandleMouseMove} onMouseLeave={this.handleMouseLeave}>
                <p>This is big brother. He wants to play with {(!this.state.SelectedToy)?'nothing':this.state.SelectedToy} </p>
                {
                    this.props.copycat && this.props.copycat(this.state)
                }
            </div>
        );
    }
}