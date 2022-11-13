import React, { useEffect } from 'react'
import { User } from '../../types/type'

const UserName = (userId:any) => {
    console.log(userId)
    var userName
    const url= "https://hackathon2-ypancna7sq-uc.a.run.app/user?userId=" + userId
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then((data:User)=> userName =data.Name);
    },[])

  return (
    <>
    <div>{userName}</div>
    <div>うううううう</div>
    </>
  )
}

export default UserName