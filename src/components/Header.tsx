import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { User } from '../types/type';
import BasicMenu from './menu';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';

const Header = () => {
    const URL = "https://hackathon2-ypancna7sq-uc.a.run.app"
    const logUserId = localStorage.getItem("userId");
    const url = URL + "/user?UserId=" + logUserId;
    const[user,setUser] = useState<User>({UserId:"",Name:"",UserPoint:0})
    useEffect(() => {
        fetch(url)
        .then(response => {return response.json()})
        .then((json:any) => setUser(json))
    },[])
    
    
  return (
    <div className='head'>
    <h1 className='title'>unipos</h1>
    <div className="menu">
    <BasicMenu/>
    </div>
    <div className='loginUserName'><div><PersonIcon/>{user.Name}</div></div>
    </div>
  )
}

export default Header