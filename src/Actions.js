import React from 'react';
import "./Actions.css"

const Actions=(props)=>{
    return(
        <span className="actions">
              <button className="remove" onClick={()=>props.removeThing(props.thing)}>
                <i className="fa fa-trash-o"></i>
              </button>
            </span>
    )
}

export default Actions 