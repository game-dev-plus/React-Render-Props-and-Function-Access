import React ,{Component,Fragment} from 'react';
import BigBrother from './BigBrother';
import LittleBrother from './LittleBrother';
import LittleSister from './LittleSister';
 
export default class Parent extends Component{
    render(){
        return(
            <Fragment>
                <BigBrother copycat={(brother)=>(
                    <Fragment>
                        <LittleBrother brother={brother}/>
                        <LittleSister brother={brother}/>
                    </Fragment>
                )}/>
            </Fragment>
        );
    }
}