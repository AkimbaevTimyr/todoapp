import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { registration } from '../http/userApi';


const Registration = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const click = async(e) =>{
        try{
            let data;
            data = await registration(Date.now(), email , password)
        }catch(e){
            console.log(e.responce)
        }
    }
    return (
        <div class="form">
            <div id="login">
                <h1>Добро пожаловать!</h1>
                <div class="field-wrap">
                    <input placeholder="Email" value={email || ''} onChange={e => setEmail(e.target.value)}type="email" />
                </div>
                <div class="field-wrap">
                    <input placeholder="Password" value={password || ''} onChange={e=> setPassword(e.target.value)} type="password"  />
                </div>
                <div className='account'>Есть аккаунт? <Link to='/login'>Войдите</Link></div>
                <button onClick={(e)=> click(e)} class="button button-block" >Зарегистрироваться</button>
            </div>
        </div>

    )
}

export default Registration