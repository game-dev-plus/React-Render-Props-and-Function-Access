import React, { Component } from 'react';
import './App.css';
import Parent from './components/Parent';
import Person from './components/Person';


class App extends Component {
  constructor(){
    super();
    this.state={
      people:[
        {name:'Bob', count : 0},
        {name:'Tina', count : 0},
        {name:'Louise', count : 0},
        {name:'Linda', count : 0},
        {name:'Gene', count : 0}
      ]
    }
  }
  increment =(name)=>{
    let ppl = this.state.people.map((p)=>{
      if (p.name===name) {
        p.count++;
      }
      return p;
    })
    this.setState({people:ppl})
  }
  render() {
    return (
      <div>
        {/* following is for function passing between components */}
        {this.state.people.map((person)=>(
          <Person name={person.name} count={person.count} key = {person.name} increment={this.increment}/>
        ))}

        <Parent/> {/**//*This is for render props*/}

     </div>
    );
  }
}

export default App;
