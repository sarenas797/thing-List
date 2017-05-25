import React from 'react'

import'./Signin.css'
import {auth, githubProvider} from './base'

const SignIn=({authHandler})=>{
    const authenticate=(provider)=>{
        auth
        .signInWithPopup(provider)
        .then(authHandler)
    }

    return(
        <button className="SignIn"
        onClick ={()=>authenticate(githubProvider)}>
        Sign In to GitHub
        </button>
    )
}

export default SignIn