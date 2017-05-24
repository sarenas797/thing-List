import React, { Component } from 'react';

import './App.css';
import Header from "./Header"
import ThingList from "./ThingList"
import AddThing from "./AddThing"

class App extends Component {
  state = {
    things: {
    }
  }

  thing(){
    return{
      id:`thing-${Date.now()}`,
      name:''
    }
  }

  sumarThing = () => {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing
    this.setState({ things })
  }

  saveThing=(thing)=>{
    const things = {...this.state.things}
    things[thing.id] = thing

    this.setState({things})
  }

  render() {

    const actions={
      saveThing:this.saveThing,
      removeThing:this.removeThing,
    }

    return (
      <div className="App">
        <Header />
        <AddThing sumarThing={this.sumarThing} />
        <ThingList things={this.state.things}{...actions} />
      </div>
    );
  }
}

export default App;
