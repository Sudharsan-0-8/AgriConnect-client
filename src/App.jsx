import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';

import client from './components/config.js';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Post from './components/Post.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [loginInfo, setLoginInfo] = useState({
    isLoggedIn: false,
    username: '',
    token: '',
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header loginInfo={loginInfo} setLoginInfo={setLoginInfo}/>
        <Routes>
          <Route path={'/'} element={<Home  loginInfo={loginInfo} />} />
          <Route path={'login'} element={<Login loginInfo={loginInfo} setLoginInfo={setLoginInfo} />} />
          <Route path={'register'} element={<Register loginInfo={loginInfo} setLoginInfo={setLoginInfo} />} />
          <Route path={'post/:id/*'} element={ <Post loginInfo={loginInfo} />} />
        </Routes>
      </div>
    </ApolloProvider>
  )
}

export default App;
