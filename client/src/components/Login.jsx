import React , {useContext, useState}from 'react'
import { Link} from "react-router-dom";
import { Context } from '..';
import { login } from '../http/userApi';

const Login = () => {
    // const history = useHistory()
    const {user} = useContext(Context)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const click = async(e) =>{
        try{
            let data;
            data = await login(email, password)
            user.setAuth(true)
            user.setUser(user)
        }catch(e){
            alert(e.responce.data.message)
        }
    }
    return (
        <div class="form">
            <div id="login">
                <h1>Добро пожаловать!</h1>
                <div class="field-wrap">
                    
                    <input type="email"  value={email} placeholder="email"/>
                </div>
                <div class="field-wrap">
                   
                    <input type="password" value={password} placeholder="password"/>
                </div>
                <div className='account'>Нет аккаунта? <Link to='/registration'>Зарегистируйтесь</Link></div>
                <button onClick={(e)=> click(e)} class="button button-block" >Войти</button>
            </div>
        </div>

    )
}

export default Login