import React, { Component} from 'react'

import './addThing.css'
import Thing from './Thing'

class AddThing extends Component{
    render(){
        return(
            <div>
                <textarea className="text"placeholder="Enter a Thing"></textarea>
                <button className = "add-thing" onClick={this.add}>Add Thing</button>
            </div>
        )
    }
}

export default AddThing 