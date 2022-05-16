import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import Login from '../Login'
import Registration from '../Registration'

const Auth = () =>{
    const location = useLocation()
    const isLogin  = location.pathname === '/login'
    return(
        <div>
            {isLogin === true ? <Login isLogin={isLogin} /> : <Registration isLogin={isLogin}/>}
        </div>
    )
}

export default Auth