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
    const {thing, savething} = this.props
    thing.name = ev.target.value
    this.props.saveThing(thing)
  }

  blurOnEnter=(ev)=>{
    if(ev.key==='Enter'){
      ev.preventDefault()
      ev.target.blur()
    }
  }

  render(){
    const {thing, removething}=this.props
      return(
          <li className="Thing">
              <input type="checkbox" value="on"/>
            <div className="details">
              <ContentEditable html={thing.name} className="name" onChange={this.updateName} ref={input=> this.nameInput = input} onKeyPress={this.blurOnEnter}/>
              <Actions thing={thing} removeThing={this.props.removeThing} />
            </div>
          </li>
      )
   }
}

export default Thing