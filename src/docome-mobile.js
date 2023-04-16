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
import './docomeMobile.css'
import IntroImage from './Images-mobile/Packagebook.jpg'
import interviewing from './Images-mobile/interviewing.jpeg'
import ClickPhoto from './Images-mobile/ClickPhotoLandscape.jpg'
import additiveInfo from './Images-mobile/AdditiveInfo.jpg'
import MidAgeCouple from './Images-mobile/midAgeCoupleMobileEdited.jpg'
import PackageBook from './Images-mobile/PackageBookMobile.jpg'
import ImageSlider from './ImageSlider'; 
import ImageSliderAuto from './ImageSliderAuto'
import businessManMobileEdited from './Images-mobile/businessManMobileEdited.jpg'
import OldCoupleMobileEdited from './Images-mobile/OldCoupleMobileEditedv2.jpg'
import FamilyMobile from './Images-mobile/FamillyMobile.jpg'


const DocomeMobile = () => {
    const [name, setName] = useState("");
    const [mail,setMail] = useState("");
    const [message, setMessage] = useState(""); 

    const slides = [
      {url : MidAgeCouple , title : "אמא, אבא או אדם יקר", subtext : "שחוגגים יום הולדת או מאורע משמח"},
      {url : businessManMobileEdited , title : "איש או אשת עסקים", subtext : "שרוצים לארוז את כל הידע ואת הדרך שפיתחו למסמך אחד בעל ערך"},
      {url : OldCoupleMobileEdited , title : "סבא וסבתא", subtext : "למי שרוצה לתעד את הסיפור המשפחתי המיוחד ולייצר נכס משמעותי לדורות הבאים"},
      {url : FamilyMobile , title : "משפחה", subtext : "שרוצה ליצוק את סיפור יצירת המשפחה לתוך ספר חוויתי"},
    ]

    const sendEmail = (e) => {
        // emailjs.send('docome', 'docome', {to_name : 'revital', from_name : name, message : message, from_email: mail, from_phone: '054-3329697'}, 'AdaJ7dw4Wmj9bxnQf')
        //   .then((response) => {
        //     console.log('SUCCESS!', response.status, response.text);
        //   }, (error) => {
        //     console.log('FAILED...', error);
        //   });
        console.log("Email Sent")
      };

    
      const ScrollToContact = (Section) => {
        const element = document.getElementById(Section)
        if(element){
            element.scrollIntoView({behavior:'smooth'});
        }
    }


    return(
       <Grid container className='DocoMeMobile'>
          {/* Intro Section */}
          <Grid container item className='Intro'>
            <Grid item xs = {12} className = 'MainHeaders'>
              <p>דוקו - מי</p>
            </Grid>
            <Grid item xs = {12} className = 'SubHeaders'>
              <p>מזכרת לכל החיים</p>
            </Grid>
            <Grid container item xs = {12} className = 'IntroImageContainer'>
              <img src = {Packagebook} className = 'IntroImage'></img>
            </Grid>
            <Grid container item xs = {12} className = 'ContactButton'>
                <Button onClick={() => ScrollToContact('contact-section')} style = {{fontSize : '2vh' , backgroundColor : '#01054C', color: 'white',marginTop : '10%', boxShadow : '0px 0px 10px rgb(1, 5, 76,0.5)'}}>ליצירת קשר</Button>
            </Grid>
            <Grid container item xs = {12} className = 'gap' style = {{height:'15vh'}}>
                
            </Grid>
          </Grid>
          {/* proccess Section */}
          <Grid container className = 'Proccess'>
              <Grid item xs = {12} className = 'MainHeaders'>
                <p>תהליך היצירה</p>
              </Grid>
              <Grid item container xs = {12 } className = 'Step'>
                <Grid container item xs = {12} className = 'StepHeader'>
                    <p>נפגשים ומקשיבים לסיפור</p>
                </Grid>
                <Grid item xs = {12}  className='step-image-container'>     
                  <div className='step-image-container-div'></div>                  
                  <img src = {interviewing} className = "step-image"></img>
                  <p className='step-image-text'>ראיונות אישיים המתקיימים בבית<br></br>
                  במהלך הראיונות נקשיב לסיפור האישי, לזיכרונות ולקולות שעולים</p>             
                </Grid>
              </Grid>
              <Grid item container xs = {12} className = 'Step'>
                <Grid container item xs = {12} className = 'StepHeader'>
                    <p>קליק, מצלמים</p>
                </Grid>
                <Grid item xs = {12}  className='step-image-container'>     
                  <div className='step-image-container-div'></div>                  
                  <img src = {ClickPhoto} className = "step-image"></img>
                  <p className='step-image-text'>מצלמים את אמא, אבא ואת כל המשפחה<br></br> המעמד הזה תמיד מאוד מרגש והופך את החוויה לחגיגה משפחתית</p>             
                </Grid>
              </Grid>
              <Grid item container xs = {12} className = 'Step'>
                <Grid container item xs = {12} className = 'StepHeader'>
                    <p>משלבים מידע משלים</p>
                </Grid>
                <Grid item xs = {12}  className='step-image-container'>     
                  <div className='step-image-container-div'></div>                  
                  <img src = {additiveInfo} className = "step-image"></img>
                  <p className='step-image-text'>מאתרים מידע היסטורי <br></br>המתממשק עם הסיפורים במסע החיים <br></br> בנוסף, עושים סדר בתמונות מהעבר ובוחרים את אלו שמשלימות את הסיפור הכתוב</p>             
                </Grid>
              </Grid>
              <Grid item container xs = {12} className = 'Step'>
                <Grid container item xs = {12} className = 'StepHeader'>
                    <p>נהנים ביחד</p>
                </Grid>
                <Grid item xs = {12}  className='step-image-container'>     
                  <div className='step-image-container-div'></div>                  
                  <img src = {Family} className = "step-image"></img>
                  <p className='step-image-text'>מגיעים לאירוע משפחתי חגיגי <br></br>  ומנחים פעילות חוויתית  ומלכדת לכל  המשפחה <br></br> בני המשפחה מעלים סיפורים זכרונות וחוויות משותפות </p>             
                </Grid>
              </Grid>
              <Grid container item xs = {12} className = 'ContactButton'>
                <Button style = {{fontSize : '2vh' , backgroundColor : '#01054C', color: 'white',marginTop : '10%',boxShadow : '0px 0px 10px rgb(1, 5, 76,0.5)'}}>חבילת דוקו-מי</Button>
            </Grid>
          </Grid>
          {/*Who's for Section */}
          <Grid container className = 'Whos'>
            {/* <div className='SliderContainer'>
             <ImageSlider slides={slides}></ImageSlider>
            </div>  */}
            <Grid item xs = {12} className = 'SubHeaders' style={{height :'1vh', margin : '0px', marginTop:'5vh'}}>
              <p>למי מתאים לתת דוקו-מי</p>              
            </Grid>    
            <ImageSliderAuto slides={slides}></ImageSliderAuto>
          </Grid>
          {/* Package Section */}
          <Grid container className='Package'>
            <Grid item xs = {12} className = 'SubHeaders'>
                <p>חבילת דוקו-מי</p>
            </Grid>
            <Grid container item xs = {10} className = 'PackageCard'>
                <Grid item xs = {12} className = 'PackageCardImageContainer'>
                    <img src = {PackageBook} className = 'PackageCardImage'></img>
                </Grid>
                <Grid item xs = {12} className = 'PackageCardTextContainer'>
                <Grid item xs = {12} container direction= 'row-reverse' className = 'packageRowMobile'>
                        <Grid item  xs = {1} className = 'packageRowIconMobile'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='packageSubtextMobile'>
                            <p>פגישה אישית בבית הלקוח למעבר על הסיפורים</p>
                        </Grid>        
                </Grid>
                <Grid item xs = {12} container direction= 'row-reverse' className = 'packageRowMobile'>
                        <Grid item  xs = {1} className = 'packageRowIconMobile'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='packageSubtextMobile'>
                            <p>יום צילומים במגוון מיקומים</p>
                        </Grid>        
                </Grid>
                <Grid item xs = {12} container direction= 'row-reverse' className = 'packageRowMobile'>
                        <Grid item  xs = {1} className = 'packageRowIconMobile'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='packageSubtextMobile'>
                            <p>כתיבת ועריכת הסיפורים בצורה שתשמור את כל המסרים</p>
                        </Grid>        
                </Grid>
                <Grid item xs = {12} container direction= 'row-reverse' className = 'packageRowMobile'>
                        <Grid item  xs = {1} className = 'packageRowIconMobile'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='packageSubtextMobile'>
                            <p>הגעה ביום הענקה וצילום המשפחה</p>
                        </Grid>        
                </Grid>
                <Grid item xs = {12} container direction= 'row-reverse' className = 'packageRowMobile'>
                        <Grid item  xs = {1} className = 'packageRowIconMobile'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='packageSubtextMobile'>
                            <p>גלריית תמונות מהצילומים הכוללת גם צילומים שלא נכנסו לספר</p>
                        </Grid>        
                </Grid>
                <Grid item xs = {12} container direction= 'row-reverse' className = 'packageRowMobile'>
                        <Grid item  xs = {1} className = 'packageRowIconMobile'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='packageSubtextMobile'>
                            <p>ספר דוקו-מי</p>
                        </Grid>        
                </Grid>
                </Grid>
                <Grid container item xs = {12} className = 'ContactButton'>
                  <Button onClick={() => ScrollToContact('contact-section')} style = {{fontSize : '1.7vh' , backgroundColor : '#01054C', color: 'white',marginTop : '5%',marginBottom : '5%', width: '40%'}}>ליצירת קשר</Button>
                </Grid>
            </Grid>
          </Grid>
          {/* About Us Section */}
          {/* Contact Us Section */}
          <Grid container className='Contact' id = 'contact-section'>
            <Grid container item xs = {10} className = 'ContactCard'>
              <Grid item xs = {12} className = 'ContactHeader'>
                <p>צרו קשר</p>
              </Grid>
              <Grid container item xs = {10} className = 'ContactForm'>
              <TextField   sx={{
                    "& .MuiInputLabel-root": {color: '#211F58'},//styles the label
                    "& .MuiInputLabel-root.Mui-focused": {color: '#211F58'},
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": { borderColor: "white" },
                    },
                  }} label = "Full Name" style = {{direction : 'rtl', width: '100%',}} value = {name} onChange = {(event) => setName(event.target.value)}>              
                </TextField>
              </Grid>
              <Grid container item xs = {10} className = 'ContactForm'>
                <TextField   sx={{
                    "& .MuiInputLabel-root": {color: '#211F58'},//styles the label
                    "& .MuiInputLabel-root.Mui-focused": {color: '#211F58'},
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": { borderColor: "white" },
                    },
                  }} label = "Email" style = {{direction : 'rtl', width: '100%',}} value = {mail} onChange = {(event) => setMail(event.target.value)}>              
                </TextField>
              </Grid>
              <Grid container item xs = {10} className = 'ContactForm'>
                <TextField   sx={{
                      "& .MuiInputLabel-root": {color: '#211F58'},//styles the label
                      "& .MuiInputLabel-root.Mui-focused": {color: '#211F58'},
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": { borderColor: "white" },
                      },
                    }} label = "Type your message here" multiline minRows={3} style = {{direction : 'rtl', width: '100%',}} value = {message} onChange = {(event) => setMessage(event.target.value)}>              
                  </TextField>
              </Grid>
              <Grid container item xs = {12} className = 'ContactButton'>
                <Button style = {{fontSize : '2vh', width:'50%', height:'60%' , backgroundColor : '#01054C', color: 'white',marginTop : '2%',marginBottom : '5%'}} onClick = {() => {sendEmail()}}>ליצירת קשר</Button>
            </Grid>
            </Grid>
          </Grid>
       </Grid>
    );
}

export default DocomeMobile