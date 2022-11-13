import React, { useEffect, useState } from 'react'
import { User } from '../types/type'

const MemberPage = () => {
  
  const[users,setUsers]=useState<User[]>([])

  useEffect(()=>{fetch("https://hackathon2-ypancna7sq-uc.a.run.app/user")
  .then(response=>{return response.json()})
  .then(json=>setUsers(json))
},[])
console.log(users)

  return (
    <div className="memberContainer">
    {users.map((user)=>(
      <div className="memberList" key={user.UserId}>
      
      <li>name:{user.Name},point:{user.UserPoint}</li>
      <br></br>
      
      </div>
    ))}
    </div>
    
  )
}

export default MemberPage