import React from 'react';
import "../index.css"
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import img from "../images/DH.png"
import fb from "../images/ico-facebook.png"
import wp from "../images/ico-whatsapp.png"
import ig from "../images/ico-instagram.png"
import tik from "../images/ico-tiktok.png"
const Footer = () => {
  const { state} = useContext(ContextGlobal);
  const theme = state.theme === 'dark' ? 'dark' : 'light';
  return (
    <footer className={theme}>
      <div>
      <img className='logo' src= {img} alt="DH-logo" />
      </div>
      <div>
      <a href="www.facebook.com"> <img className='redes' src = {fb} alt="" /></a>
      <a href="www.instagram.com"> <img className='redes'src={ig} alt="" /></a>
      <a href="www.whatsapp.com"> <img className='redes'src={wp} alt="" /></a>
      <a href="www.tiktok.com"> <img className='redes'src={tik} alt="" /></a>
      </div>
    </footer>
  );
};

export default Footer;