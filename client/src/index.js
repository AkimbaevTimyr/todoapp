import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoStore from './store/todo'
import UserStore from './store/user';
export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{
      todo: new TodoStore(),
      user: new UserStore()
    }}>
      <App />
    </Context.Provider>
);

