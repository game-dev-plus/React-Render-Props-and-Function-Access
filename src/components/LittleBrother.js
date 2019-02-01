import React ,{Component} from 'react';

export default class LittleBrother extends Component{
    render()
    {
        return(
            <div>
                <p>This is little brother. He wants to play with {(!this.props.brother.SelectedToy)?'nothing':this.props.brother.SelectedToy} </p>
            </div>
        );
    }
}