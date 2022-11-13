import { Button, toggleButtonGroupClasses } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { User, Message } from '../types/type'

import MessagePage from './MessagePage'

const SettingPage = () => {
    const URL = "https://hackathon2-ypancna7sq-uc.a.run.app"
    const[open,openMessage] = useState<boolean>(false)
    const toggleButton = () => {
      openMessage(!open);
      console.log(open);
    }
    const logUserId = localStorage.getItem("userId");
  const[user,setUser]=useState<User>({UserId:"",Name:"",UserPoint:0})
  
    const url = URL + "/user?UserId=" + logUserId;
    useEffect(() => {
    fetch(url)
    .then(response=> {return response.json()})
    .then((json)=>setUser(json))},[]);

  //FromUser
  
  //idから名前を取ってくるようにしたい
  //とりあえずuser一覧をとってきて照合する
  const[users,setUsers]=useState<User[]>([])
  useEffect(()=>{fetch(URL+"/user")
  .then(response=>{return response.json()})
  .then(json=>setUsers(json))
},[])





  //toUser
  const [toUser,setToUser] = useState<Message[]>([])
  const ToUserUrl= URL+"/myPage?ToUserId="+logUserId
  
  useEffect(()=>{
  fetch(ToUserUrl)
  .then((response:any)=> {return response.json()})
  .then((json)=>setToUser(json))},[]);
  
  toUser.map((m) => {
    users.map((user) => {
      if(m.FromUserId === user.UserId){
        m.FromUserId = user.Name
      }
    }
    )
  })
  const handleClick = (e:any) => {
    console.log(e)
    const messageId = e.target.value
    console.log(messageId);
    console.log(e.target.value)
    const url:string=URL+"/message?id="+messageId
    fetch(url, { method: 'DELETE' });
  }
  const deleteUser = () => {
    const url:string = URL+"/user?id="+logUserId
    console.log(logUserId)
    fetch(url, { method: 'DELETE'});
  }
  
    if(open){
      return(
        <>
        <h4>送信したメッセージ</h4>
        <Button onClick={toggleButton}>戻る</Button>
          {toUser.map((message)=> (
            <div key={message.MessageId}>
              <fieldset>
              <p>to:{message.FromUserId},ポイント:{message.MessagePoint}</p>
              <p>{message.MessageText}</p>
              <p>{message.MessageId}</p>
              <form>
              <input type="hidden" value={message.MessageId}></input>
              <Button  onClick={(e) =>handleClick(e)}>削除</Button>
              </form>
              </fieldset>
            </div>
          ))
          }
          </>
      )
    }else{
      return(
        <>
        <Button onClick={deleteUser}>ユーザーの削除</Button>
        <Button onClick={toggleButton}>メッセージの削除</Button>
        </>
      )
    }
}

export default SettingPage