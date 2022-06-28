import './App.css';
import { useEffect } from 'react';
import { useAppDispatch} from './hooks/redux';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Auth from './components/pages/Auth';
import Main from './components/pages/Main';
import NavBar from './components/NavBar';
import { setAuth } from './store/reducers/UserActionCreator';
import { check } from './http/userApi';
const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    check().then(data => {
      dispatch(setAuth(true))
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
}

export default App;


 // 