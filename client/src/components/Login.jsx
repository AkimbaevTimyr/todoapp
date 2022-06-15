import React, { useContext, } from 'react'
import { Link } from "react-router-dom";
import { Context } from '..';
import { login } from '../http/userApi';
import { useNavigate } from 'react-router-dom';
import { useInput } from './validation/useInput';
import { LockClosedIcon } from '@heroicons/react/solid'

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
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Войди если есть аккаунт</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        или{' '}
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            <Link to='/registration'>Зарегийстрируй новый</Link>
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        {(email.isDirty && email.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
                        {(email.isDirty && email.minLengthError) && <div style={{ color: 'red' }}>Не корректная длина</div>}
                        {(email.isDirty && email.emailError) && <div style={{ color: 'red' }}>Не верный email</div>}
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={(e) => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value || ''}
                            />
                        </div>
                        <br />
                        {(password.isDirty && password.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
                        {(password.isDirty && password.minLengthError) && <div style={{ color: 'red' }}>Не корректная длина</div>}
                        {(password.isDirty && password.maxLengthError) && <div style={{ color: 'red' }}>Не корректная длина</div>}
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                type="password" onChange={(e) => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value || ''}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="button" onClick={(e) => handleClick(e)} disabled={!email.buttonValid || !password.buttonValid}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login