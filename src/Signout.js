import React from 'react'

import './Signout.css'

const SignOut=(props)=>{
    return(
        <button className="SignOut" onClick={props.signOut}>Sign out</button>
    )
}

export default SignOut
