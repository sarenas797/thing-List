import React from 'react'

import './addThing.css'


const AddThing=(props)=>{

        return(
            <div>
                <button className = "add-thing" onClick={props.sumarThing}>Add Thing</button>
            </div>
        )
    }
   

export default AddThing 