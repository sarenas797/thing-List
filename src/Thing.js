import React,{Component} from 'react';

import "./Thing.css"
import ContentEditable from './react-contenteditable'
import Actions from './Actions'



class Thing extends Component{

  componentDidMount() {
    if (!this.nameInput.htmlEl.textContent) {
      this.nameInput.htmlEl.focus()
    }
  }
  updateName = (ev) => {
    const {thing, saveThing} = this.props
    thing.name = ev.target.value
    saveThing(thing)
  }

  blurOnEnter=(ev)=>{
    if(ev.key==='Enter'){
      ev.preventDefault()
      ev.target.blur()
    }
  }
  completed=(ev)=>{
    const {thing, saveThing}=this.props
    if(thing.completed===false){
      thing.completed=true
    }
    else{
      thing.completed=false
      
    }
    console.log(thing.completed)
    saveThing(thing)
  }

  check(){
     const {thing, saveThing}=this.props
     const checked=false
     saveThing(thing)
  }

  render(){
    const {thing, removeThing}=this.props
      return(
          <li className="Thing">
              <input type="checkbox" value="on" onChange={this.completed} checked={thing.completed} />
            <div className="details">
              <ContentEditable html={thing.name} 
              className="name" 
              onChange={this.updateName} 
              ref={input=> this.nameInput = input} 
              onKeyPress={this.blurOnEnter}/>
              <Actions thing={thing} removeThing={removeThing} />
            </div>
          </li>
      )
   }
}

export default Thing