import React from 'react';

import "./ThingList.css"
import AddThing from './AddThing'
import Thing from './Thing'

const ThingList = (props, AddThing) =>{
    return(
        <ul className = "ThingList">
            {
                Object.keys(props.things).map(thingId => <Thing thing={props.things[thingId]} key={thingId} />)
            }
        </ul>
    )
}

export default ThingList