import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import {  Link } from 'react-router-dom'
import { Context } from '..'

const NavBar = observer (() =>{
    const {user} = useContext(Context)
    const click = (bool) =>{
        user.setAuth(bool)
    }
    return(
        <div className='navBar'>
            <Link to='/'><div>Главная</div></Link>
            {user.isAuth === true ? ( <Link to='/login'><div onClick={()=> click(false)}>Выйти</div></Link>) :  (<Link to='/login'><div>Войти</div></Link>)}
            <Link to='/registration'><div>Зарегистрироваться</div></Link>
        </div>
    )
})

export default NavBar