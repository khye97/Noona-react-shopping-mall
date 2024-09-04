import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar'
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import PrivateRoute from './routes/PrivateRoute'
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [loginBtn, setLoginBtn] = useState("로그인");

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} loginBtn={loginBtn} setLoginBtn={setLoginBtn} />

      <Routes>
        <Route path='/' element={ <ProductAll />}/>
        <Route path='/login' element={ <Login authenticate={authenticate} setAuthenticate={setAuthenticate} setLoginBtn={setLoginBtn} />}/>
        <Route path="/product/:id" element={ <PrivateRoute authenticate={authenticate} /> } />
      </Routes>
    </div>
  );
}

export default App;
