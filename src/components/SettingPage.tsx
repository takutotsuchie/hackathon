import { Button, toggleButtonGroupClasses } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { User, Message, UserMessage } from '../types/type'

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





  //送信済みメッセージの一覧
  //送信済みメッセージ,sendMessageHander
  //message,toUser,pointを返したい
  const [sendMessage,setSendMessage] = useState<UserMessage[]>([])
  const SendMessageUrl= URL+"/sendMessage?UserId="+logUserId
  
  useEffect(()=>{
  fetch(SendMessageUrl)
  .then((response:any)=> {return response.json()})
  .then((json)=>setSendMessage(json))}
  ,[]);
  const deleteMessage = (e:any) => {
    console.log(e)
    const messageId = e.target.value
    console.log(messageId);
    console.log(e.target.value)
    const url:string=URL+"/message?messageId="+messageId
    fetch(url, { method: 'DELETE' });
  }
  //userはとりあえず削除しない
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
          {sendMessage.map((sendMessage)=> (
            <div key={sendMessage.MessageId}>
              <fieldset>
              <p>to:{sendMessage.Name},ポイント:{sendMessage.MessagePoint}</p>
              <p>{sendMessage.MessageText}</p>
              <form>
              <input type="hidden" value={sendMessage.MessageId}></input>
              <Button  onClick={(e) =>deleteMessage(e)}>削除</Button>
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