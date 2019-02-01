import React ,{Component} from 'react';

export default class LittleSister extends Component{
    render()
    {
        return(
            <div>
                <p>This is little sister. She wants to play with {(!this.props.brother.SelectedToy)?'nothing':this.props.brother.SelectedToy} </p>
            </div>
        );
    }
}