import React, { Component} from 'react'

import './addThing.css'
import Thing from './Thing'

class AddThing extends Component{
    
    constructor(props){
        super(props)
        this.state={
            thing:'',
            things:{},
        }
        this.update=this.update.bind(this)
        this.AddThing=this.AddThing.bind(this)
    }
    update(ev){
        this.setState({
            thing: ev.target.value
        })
    }

    AddThing(ev){
        const state = {...this.state}
        const thing = {
            'thing-5':{
            id: 4,
            name: this.state.thing,},
        }
        state.things.push(thing)
        state.thing=''
        this.setState(state)
      
    }

    render(){
        return(
            <div>
                <textarea value = {this.state.name} onChange={this.update}className="text"placeholder="Enter a Thing"></textarea>
                <button className = "add-thing" onClick={this.add}>Add Thing</button>
            </div>
        )
    }
   
    }

export default AddThing 