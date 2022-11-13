import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import HomeIcon from '@mui/icons-material/Home';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import Groups3Icon from '@mui/icons-material/Groups3';
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import './atoms/menu.css';
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
  
<div className='menu'>       
  <ul className='menuList'>
  <div className="button_line007"></div>
  <li><Button href="/"><HomeIcon/>ホーム</Button></li>
  <li><Button href= "/myPage"><SportsMartialArtsIcon/>マイページ</Button></li>
  <li><Button href="/member"><Groups3Icon/>メンバー</Button></li>
  <li><Button href="/message"><SendIcon/>メッセージ</Button></li>
  <li><Button href="/setting"><SettingsIcon/>設定</Button></li>
  </ul>
  </div>
  );
}
