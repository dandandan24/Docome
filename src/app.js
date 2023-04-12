import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './docome.css'
import book from './Images/OpenBook.png' 
import notebookAndCamera from './Images/notebookAndCamera.JPEG'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import tree from './Images/tree-736885__480.jpg'
import emailjs from '@emailjs/browser'
import { getValue } from '@mui/system';
import AboutMe from './Images/AboutMe.jpg'
import ClickPhoto from './Images/ClickPhotoLandscape.jpg'
import interviewing from './Images/interviewing.jpeg'
import additiveInfo from './Images/AdditiveInfo.jpg'
import gettingThePresent from './Images/GettingThePresent.jpg'
import BuisnessWoman from './Images/BuisnessWoman.jpg'
import Family from './Images/Family.jpg'
import OldCouple from './Images/OldCouple.jpg'
import Parents from './Images/Parents.jpg'
import Revital from './Images/Revital.jpg'
import Sima from './Images/Sima.jpg'
import Packagebook from './Images/Packagebook.jpg'
import introBook from './Images/introBook.jpg'
import bookVideo from './Images/BookVideoTrans.mp4'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive';

const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
});

const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
});

const App = () => {
    return(
      {isDesktop ? <DocoMe></DocoMe> : <></>}
    );
}

export default Docome