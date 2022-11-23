import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ulid } from 'ulid';
import { User } from '../types/type';

const MessagePage = () => {
  const URL = "https://hackathon2-ypancna7sq-uc.a.run.app"
  const messageUrl=URL+"/message"
  const url=URL+"/user"
  const[users,setUsers] = useState<User[]>([])
  
  useEffect(()=>{fetch(url)
  .then(response=>{return response.json()})
  .then(json=>setUsers(json))
},[])
const logUserId:any = localStorage.getItem("userId");
const handleSubmit = () => {
  
}
  return (
    <div className="messageContainer">
    <form action={messageUrl} method="post" onSubmit={handleSubmit} className="message4">
      <input type="hidden" name="MessageId" value={ulid()} className="message1"/>
      <label>送る人</label>
      <select name="ToUserId" className="message2">
      {users.map((user)=>(
        <option key={user.UserId} value={user.UserId}>{user.Name}</option>
      ))}
      </select>
      <input type="hidden" value={logUserId} name="FromUserId"></input>
      <br></br>
      <label>送るポイント</label>
      <input type="number" name="MessagePoint"placeholder="Point" min="1" max="100" required className="message3"/>
      <br/>
        <textarea name="MessageText" required></textarea>
        <br></br>
      <Button  type="submit" >送信</Button>
    </form>
    
    </div>
    
  )
}

export default MessagePage