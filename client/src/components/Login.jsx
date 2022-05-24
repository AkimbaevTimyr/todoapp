import React , {useContext, useState}from 'react'
import { Link} from "react-router-dom";
import { Context } from '..';
import { login } from '../http/userApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
   
    const click = async(e) =>{
        try{
            if(email){
                let data;
                data = await login(email, password).then(data => localStorage.setItem('id', data))
                user.setAuth(true)
                user.setUser({email, password})
                navigate('/main')
            }else{
                alert('Введите email или password')
            }
        }catch(e){
            console.log(e.messages)
        }
    }
    return (
        <div class="form">
            <div id="login">
                <h1>Добро пожаловать!</h1>
                <div class="field-wrap">
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="email"/>
                </div>
                <div class="field-wrap">
                    <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="password"/>
                </div>
                <div className='account'>Нет аккаунта? <Link to='/registration'>Зарегистируйтесь</Link></div>
                <button onClick={(e)=> click(e)} class="button button-block" >Войти</button>
            </div>
        </div>

    )
}

export default Login