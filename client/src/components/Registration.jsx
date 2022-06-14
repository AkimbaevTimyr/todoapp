import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { registration } from '../http/userApi';
import { useNavigate } from 'react-router-dom';
import { useInput } from './validation/useInput';
const Registration = () => {
    const password = useInput('', {isEmpty: true, minLength: 1 ,maxLength: 10});
    const email = useInput('', {isEmpty: true, minLength: 5, isEmail: true});
    let navigate = useNavigate();
    const click = async(e) =>{
        try{
            if(email){
                let data;
                data = await registration(Date.now(), email.value , password.value)
                navigate('/login')
            }else{
                alert('Введите email или password')
            }
        }catch(e){
            console.log(e.responce)
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
                    <input placeholder="Email" value={email.value || ''} onChange={(e)=> email.onChange(e)} onBlur={e=> email.onBlur(e)} type="email" />
                </div>
                {(password.isDirty && password.isEmpty) && <div style={{ color: 'red'}}>Поле не может быть пустым</div>}
                {(password.isDirty && password.minLengthError) && <div style={{ color: 'red'}}>Не корректная длина</div>}
                {(password.isDirty && password.maxLengthError) && <div style={{ color: 'red'}}>Не корректная длина</div>}
                <div className="field-wrap">
                    <input placeholder="Password" value={password.value || ''} onChange={(e)=> password.onChange(e)} onBlur={e=> password.onBlur(e)} type="password"  />
                </div>
                <div className='account'>Есть аккаунт? <Link to='/login'>Войдите</Link></div>
                <button type="button"  onClick={(e)=> click(e)} disabled={!email.buttonValid || !password.buttonValid}  class="btn b btn-primary">Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Registration


