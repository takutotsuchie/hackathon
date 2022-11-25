import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
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
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">送る人</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    name="ToUserId"
  >
    {users.map((user)=>(
        <MenuItem key={user.UserId} value={user.UserId}>{user.Name}</MenuItem>
      ))}
  </Select>
</FormControl>
      <input type="hidden" value={logUserId} name="FromUserId"></input>
      <br></br>
      <FormControl fullWidth>
  
  <TextField
  id="outlined-basic" label="送るポイント" variant="outlined"
  name="MessagePoint"
  
  size="small"
  type="number" 
  InputProps={{ inputProps: { min: 1, max: 100 } }}
  required
/>
</FormControl>
      <br/>
      <TextField name="MessageText" id="standard-basic" label="Message" variant="standard" required/>
        <br></br>
      <Button  type="submit" >送信</Button>
    </form>
    
    </div>
    
  )
}

export default MessagePage