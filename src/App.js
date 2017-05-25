import React, { Component } from 'react';

import './App.css';
import Header from "./Header"
import ThingList from "./ThingList"
import AddThing from "./AddThing"
import base, {auth} from './base'
import SignOut from './Signout'
import SignIn from './SignIn'

class App extends Component {
  state = {
    things: {},
    uid:null,
  }

  authHandler=(authData)=>{
    this.setState(
      {uid:authData.user.uid},
      this.syncThings
    )
  }

  syncThings=()=>{
    base.syncState(
      `${this.state.uid}/things`,
      {
        context:this,
        state:'things'
    })
  }

  componentWillMount(){
    auth.onAuthStateChanged(
      (user)=>{
        if(user){
          this.authHandler({user})
        }
      }
    )
  }

  removeThing = (thing) => {    
    const things = {...this.state.things}
    things[thing.id]=null
    this.setState({ things })
  }

  thing(){
    return{
      id:`thing-${Date.now()}`,
      name:'',
      dueDate:'', 
      completed:false,
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

  signedIn=()=>{
    return this.state.uid
  }
  
  signOut=()=>{
    auth
      .signOut()
      .then(() => this.setState({uid:null}))
  }

  renderMain=()=>{
    const actions={
      saveThing:this.saveThing,
      removeThing:this.removeThing,
      completed:this.completed,
    }
    return(
      <div>
        <SignOut signOut={this.signOut} />
        <AddThing sumarThing={this.sumarThing} />
        <ThingList things={this.state.things}{...actions} />
      </div>
    )

  }

  render() {
    return (
      <div className="App">
        <Header />

        {this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler} />}
      </div>
    );
  }
}

export default App;
