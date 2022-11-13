import {render} from 'react-dom'

import HomePage from "./components/HomePage";
import Button from '@mui/material/Button';

import { BrowserRouter as Router ,Route ,Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import MemberPage from "./components/MemberPage";
import MessagePage from "./components/MessagePage";
import MyPage from "./components/MyPage";
import Register from "./components/RegisterPage";
import './App.css';
import Test from './components/Test';
import { useState } from 'react';
import BasicMenu from './components/menu';
import { User } from './types/type';
import Test2 from './components/test2';
import Header from './components/Header';
import SettingPage from './components/SettingPage';



const App =()=> {
  
  return (
    <div >
    <div className='Header'>
    <Header/>
    </div>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/member" element={<MemberPage/>}/>
      <Route path="/message" element={<MessagePage />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/test" element={<Test />}/>
      <Route path="/test2" element={<Test2 />}/>
      <Route path="/setting" element={<SettingPage />}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;