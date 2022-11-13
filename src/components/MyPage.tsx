import axios from 'axios';
import { constants } from 'fs/promises';
import React, { useRef, useState,useCallback, FC, MouseEventHandler } from 'react'
import { useMemo } from 'react';
import { useReducer } from 'react';
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

  //FromUser
  const [fromUser,setFromUser] = useState<UserMessage[]>([])
  const FromUserUrl= URL + "/receiveMessage?UserId="+logUserId
  useEffect(() =>{
  fetch(FromUserUrl)
  .then((response:any)=> {return response.json()})
  .then((json)=>setFromUser(json))},[]);
  
  
  const[users,setUsers]=useState<User[]>([])
  useEffect(()=>{fetch(URL+"/user")
  .then(response=>{return response.json()})
  .then(json=>setUsers(json))
},[])


  //受信したメッセージ
  const [toUser,setToUser] = useState<UserMessage[]>([])
  const ToUserUrl= URL+"/receiveMessage?UserId="+logUserId
  
  useEffect(()=>{
  fetch(ToUserUrl)
  .then((response:any)=> {return response.json()})
  .then((json)=>setToUser(json))}
  ,[]);
  
  
  
  return (
    <div className="myPageContainer">
      <h3 className="myPage">マイページ</h3>
      <p> 現在のポイント:{user.UserPoint}</p>
      <h4>受信したメッセージ</h4>
      <ul>
        {fromUser.map((userMessage)=>(
          <div key={userMessage.MessageId}>
          <fieldset>
          <h1></h1>
          <UserName UserId={userMessage.FromUserId}/>
          <p>from:{userMessage.Name}</p>
          <p>ポイント: {userMessage.MessagePoint}</p>
          </fieldset>
          </div>
        ))}
      </ul>
      <h4>送信したメッセージ</h4>
          {toUser.map((userMessage)=> (
            <div key={userMessage.MessageId}>
              <fieldset>
              <p>to:{userMessage.Name}</p>
              <p>ポイント:{userMessage.MessagePoint}</p>
              <p>{userMessage.MessageText}</p>
              </fieldset>
            </div>
          ))

          }
    </div>
  );
}

export default MyPage

