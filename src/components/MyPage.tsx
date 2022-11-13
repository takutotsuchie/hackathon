import axios from 'axios';
import { constants } from 'fs/promises';
import React, { useRef, useState,useCallback, FC, MouseEventHandler } from 'react'
import { useEffect } from 'react';



import { Message, User, UserMessage } from '../types/type';
import UserName from './atoms/UserName';




import Test from "./Test"

//loguserの情報と送信ずみ、受信済みメッセージを表示
function MyPage() {
  //currentUserを取ってくる
  const URL = "https://hackathon2-ypancna7sq-uc.a.run.app"
  const logUserId = localStorage.getItem("userId");
  const[user,setUser]=useState<User>({UserId:"",Name:"",UserPoint:0})
    
    const url = URL+ "/user?UserId=" + logUserId;
    useEffect(() => {
    fetch(url)
    .then(response=> {return response.json()})
    .then((json)=>setUser(json))},[]);

  //受信済みメッセージ,receiveMessageHandler
  //message,fromUser,pointを返したい
  const [receiveMessage,setReceiveMessage] = useState<UserMessage[]>([])
  const ReceiveUserUrl= URL + "/receiveMessage?UserId="+logUserId
  useEffect(() =>{
  fetch(ReceiveUserUrl)
  .then((response:any)=> {return response.json()})
  .then((json)=>setReceiveMessage(json))},[]);
  
  
  const[users,setUsers]=useState<User[]>([])
  useEffect(()=>{fetch(URL+"/user")
  .then(response=>{return response.json()})
  .then(json=>setUsers(json))
},[])


  //送信済みメッセージ,sendMessageHander
  //message,toUser,pointを返したい
  const [sendMessage,setSendMessage] = useState<UserMessage[]>([])
  const SendMessageUrl= URL+"/sendMessage?UserId="+logUserId
  
  useEffect(()=>{
  fetch(SendMessageUrl)
  .then((response:any)=> {return response.json()})
  .then((json)=>setSendMessage(json))}
  ,[]);
  
  
  
  return (
    <div className="myPageContainer">
      <h3 className="myPage">マイページ</h3>
      <p> 現在のポイント:{user.UserPoint}</p>
      <h4>受信したメッセージ</h4>
      <ul>
        {receiveMessage.map((receiveMessage)=>(
          <div key={receiveMessage.MessageId}>
          <fieldset>
          <h1></h1>
          <UserName UserId={receiveMessage.FromUserId}/>
          <p>from:{receiveMessage.Name}</p>
          <p>ポイント: {receiveMessage.MessagePoint}</p>
          </fieldset>
          </div>
        ))}
      </ul>
      <h4>送信したメッセージ</h4>
          {sendMessage.map((sendMessage)=> (
            <div key={sendMessage.MessageId}>
              <fieldset>
              <p>to:{sendMessage.Name}</p>
              <p>ポイント:{sendMessage.MessagePoint}</p>
              <p>{sendMessage.MessageText}</p>
              </fieldset>
            </div>
          ))

          }
    </div>
  );
}

export default MyPage

