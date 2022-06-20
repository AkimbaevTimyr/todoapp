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
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { check } from './http/userApi';
const App = observer(() => {
  const { user } = useContext(Context)
  useEffect(() => {
    check().then(data => {
      user.setAuth(true)
    })
  }, [])
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Auth />} />
        </Routes>
        <Routes>
          <Route path='/registration' element={<Auth />} />
        </Routes>
        <Routes>
          <Route path='/main' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
})

export default App;
