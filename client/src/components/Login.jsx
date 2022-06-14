import React, { useContext,} from 'react'
import { Link } from "react-router-dom";
import { Context } from '..';
import { login } from '../http/userApi';
import { useNavigate } from 'react-router-dom';
import { useInput } from './validation/useInput';
const Login = () => {
    let navigate = useNavigate();
    const { user } = useContext(Context)
    const password = useInput('', { isEmpty: true, minLength: 1, maxLength: 10 });
    const email = useInput('', { isEmpty: true, minLength: 5, isEmail: true, maxLength: 100 });
    const handleClick = async (e) => {
        try {
            let data;
            data = await login(email.value, password.value).then(data => localStorage.setItem('id', data))
            user.setAuth(true)
            user.setUser({ email: email.value, password: password.value })
            navigate('/')
        } catch (error) {
            console.log(error)
            alert("Не верный логин или пароль")
        }
    }
    return (
        <div className="form">
            <div id="login">
                <h1>Добро пожаловать!</h1>
                {(email.isDirty && email.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
                {(email.isDirty && email.minLengthError) && <div style={{ color: 'red' }}>Не корректная длина</div>}
                {(email.isDirty && email.emailError) && <div style={{ color: 'red' }}>Не верный email</div>}
                <div className="field-wrap">
                    <input type="email" onChange={(e) => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value || ''} placeholder="Email" />
                </div>
                {(password.isDirty && password.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
                {(password.isDirty && password.minLengthError) && <div style={{ color: 'red' }}>Не корректная длина</div>}
                {(password.isDirty && password.maxLengthError) && <div style={{ color: 'red' }}>Не корректная длина</div>}
                <div className="field-wrap">
                    <input type="password" onChange={(e) => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value || ''} placeholder="Password" />
                </div>
                <div className='account'>Нет аккаунта? <Link to='/registration'>Зарегистируйтесь</Link></div>
                <button type="button" onClick={(e) => handleClick(e)} disabled={!email.buttonValid || !password.buttonValid} class="btn b btn-primary">Войти</button>
            </div>
        </div>

    )
}

export default Login