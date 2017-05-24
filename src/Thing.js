import React from 'react';

import "./Thing.css"
import ContentEditable from './react-contenteditable'
import Actions from './Actions'


const Thing = ({thing, saveThing, removeThing}) =>{

  const updateName=(ev)=>{
    thing.name = ev.target.value
    saveThing(thing)
  }

    return(
        <li className="Thing">
            <input type="checkbox" value="on"/>
          <div className="details">
            <ContentEditable html={thing.name} className="name" onChange={updateName} />
            <Actions thing={thing} removeThing={removeThing} />
          </div>
        </li>
    )
}

export default Thing