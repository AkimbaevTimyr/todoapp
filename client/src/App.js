import './App.css';
import { observer } from 'mobx-react-lite';
import Auth from './components/pages/Auth';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Main from './components/pages/Main'
import NavBar from './components/NavBar';
import { getTodos } from './http/taskApi';
import { useContext, useEffect } from 'react';
import { Context } from '.';
const App = observer(() => {
  const {user} = useContext(Context)
  const {todo} = useContext(Context)
  
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Auth />}/>
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
