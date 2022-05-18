import './App.css';
import { Context } from '.';
import { useContext, useEffect } from 'react';
import { getTodos } from './http/taskApi'
import { observer } from 'mobx-react-lite';
import Auth from './components/pages/Auth';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom"
import Main from './components/pages/Main'
import NavBar from './components/NavBar';
import { check } from './http/userApi';
const App = observer(() => {
  const { todo } = useContext(Context)
  // useEffect(() => {
  //   getTodos(1).then(data => todo.setTodo(data))
  // }, [])
  const {user} = useContext(Context)
  useEffect(()=>{
    
  },[])
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Auth />}/>
      </Routes>
      <Routes>
        <Route path='/registration' element={<Auth />}/>
      </Routes>
      <Routes>
        <Route path='/main' element={<Main />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
})

export default App;
