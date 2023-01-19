import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import MyRoute from './components/MyRoute';
import React, { useState } from 'react';
import ArrSaleContext from './components/ArrSaleContext';
import HookForm from './components/Hook-Form';


function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <BrowserRouter>
        {
          !isLogin ?
            <Login setIsLogin={setIsLogin} />
            :
            <ArrSaleContext>
              <MyRoute setIsLogin={setIsLogin}/>
            </ArrSaleContext>
        }

      </BrowserRouter>
      {/* <HookForm/> */}
    </div>
  );
}
export default App;
