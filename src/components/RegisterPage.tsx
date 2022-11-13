import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { ulid } from 'ulid'


const Register = () => {
  const id = ulid()
  const url="https://hackathon2-ypancna7sq-uc.a.run.app/user"
  const set = () => {
    localStorage.setItem("userId",id)
  }
  return (
    <div className="registerContainer">
    <h1>Register</h1>
    <div >
    <form method="post" action={url}>
      <input type="hidden" name = "UserId" value ={id}/>
      <div className="RegisterForm">
      <label>name:</label><input type="text" name="Name" placeholder="name" required/>
      </div>
      <input type="hidden" name="USerPoint" value="1000" />
      <br></br>
      <Button type="submit" onClick={set}>登録</Button>
    </form>
    </div>
    </div>
  )
}

export default Register