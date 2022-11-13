import React from 'react'

import Button from '@mui/material/Button';
import '../App.css';
const HomePage = (props:any) => {
  return (
    <div className="homePageContainer">
    <div className="unipos">
    <h1 >unipos</h1>
    <h3>「組織を変える行動を増やす」</h3>
      <p>
        SOCIAL LINKSを介した「貢献の見える化」が心理的安全性の向上や称賛文化の醸成を促し、風通しの良
        い組織風土をつくります。
      </p>
      </div>
    <Button href="login">ログイン</Button>
    <Button href="register">新規登録</Button>
    </div>
  )
}


export default HomePage