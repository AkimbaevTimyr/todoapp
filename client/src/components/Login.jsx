import React , {useContext, useState}from 'react'
import { Link} from "react-router-dom";
import { Context } from '..';
import { login } from '../http/userApi';
import { useNavigate } from 'react-router-dom';
import { useInput } from './validation/useInput';
const Login = () => {
    let navigate = useNavigate();
    const {user} = useContext(Context)
    const password = useInput('', {isEmpty: true, minLength: 1 ,maxLength: 10});
    const email = useInput('', {isEmpty: true, minLength: 5, isEmail: true, maxLength: 10});

    const handleClick = async(e) =>{
            if(email){
                let data;
                data = await login(email.value, password.value).then(data => localStorage.setItem('id', data))
                user.setAuth(true)
                user.setUser({email: email.value, password: password.value})
                navigate('/')
            }else{
                alert('Введите email или password')
            }
    }
    
    return (
        <div className="form">
            <div id="login">
                <h1>Добро пожаловать!</h1>
                {(email.isDirty && email.isEmpty) && <div style={{ color: 'red'}}>Поле не может быть пустым</div>}
                {(email.isDirty && email.minLengthError) && <div style={{ color: 'red'}}>Не корректная длина</div>}
                {(email.isDirty && email.emailError) && <div style={{ color: 'red'}}>Не верный email</div>}
                <div className="field-wrap">
                    <input type="email" onChange={(e)=> email.onChange(e)} onBlur={e=> email.onBlur(e)} value={email.value || ''} placeholder="email"/>
                </div>
                {(password.isDirty && password.isEmpty) && <div style={{ color: 'red'}}>Поле не может быть пустым</div>}
                {(password.isDirty && password.minLengthError) && <div style={{ color: 'red'}}>Не корректная длина</div>}
                {(password.isDirty && password.maxLengthError) && <div style={{ color: 'red'}}>Не корректная длина</div>}
                <div className="field-wrap">
                    <input type="password" onChange={(e)=> password.onChange(e)} onBlur={e=> password.onBlur(e)} value={password.value || ''} placeholder="password"/>
                </div>
                <div className='account'>Нет аккаунта? <Link to='/registration'>Зарегистируйтесь</Link></div>
                <button onClick={(e)=> handleClick(e)} className="button button-block">Войти</button>
            </div>
        </div>

    )
}

export default Login