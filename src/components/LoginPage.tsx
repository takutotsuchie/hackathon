import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { setSourceMapRange } from 'typescript';
import { useEffect } from 'react';
import * as Component from "../api/apiUser"
import{User}from "../types/type"
import { ulid } from 'ulid';

import { NONAME } from 'dns';
const LoginPage = (props:any) => {

  const url="https://hackathon2-ypancna7sq-uc.a.run.app/user"
  const[users,setUsers] = useState<User[]>([])
  
  useEffect(()=>{fetch(url)
  .then(response=>{return response.json()})
  .then(json=>setUsers(json))
},[])
  
  console.log(users);
  const handleChange = (e:any) => {
    localStorage.setItem("userId",e.target.id);
    console.log(e.target.id)
  }
  return (
    <>
    <h1>ログイン</h1>
    
    {users.map((u)=>(
      <div key={u.UserId}>
      <form>
      <Button href="/myPage" id={u.UserId} onClick={(e) => handleChange(e)} >{u.Name},{u.UserPoint}選択</Button>
      </form>
      </div>
    ))}
    </>
  )
}

export default LoginPage;