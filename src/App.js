import React, { Component } from 'react';

import './App.css';
import Header from "./Header"
import ThingList from "./ThingList"
import AddThing from "./AddThing"

class App extends Component {
  state = {
    things: {
      'thing-1':{ id: 'thing-1', name: 'Milk'},
      'thing-2':{id: 'thing-2', name: 'Bread'},
      'thing-3':{id: 'thing-3', name: 'Bibb Lettuce'},
    }
  }
  render() {
    return (
      
      <div className="App">
        <Header />
        <AddThing />
        <ThingList things={this.state.things} />
      </div>
    );
  }
}

export default App;
