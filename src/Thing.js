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

  updateDate = (ev) => {
    const {thing, saveThing} = this.props
    thing.dueDate = ev.target.value
    saveThing(thing)
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
    thing.completed = ev.target.checked
    saveThing(thing)
  }



  render(){
    const {thing, removeThing}=this.props
      return(
          <li className="Thing">
              <input type="checkbox" onChange={this.completed} defaultChecked={thing.completed} />
            <div className="details">
              <ContentEditable html={thing.name} 
              className="name" 
              onChange={this.updateName} 
              ref={input=> this.nameInput = input} 
              onKeyPress={this.blurOnEnter}/>

              <input defaultValue={thing.dueDate} 
              className="name" 
              type="date" 
              onChange={this.updateDate} 
              //ref={input=> this.nameInput = input} 
              onKeyPress={this.blurOnEnter}/>
              <Actions thing={thing} removeThing={removeThing} />
            </div>
          </li>
      )
   }
}

export default Thing