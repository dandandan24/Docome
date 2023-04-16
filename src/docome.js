import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './docome.css'
import book from './Images/OpenBook.png' 
import notebookAndCamera from './Images/NoteBookAndCameraV2.jpg'
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
import AboutMe from './Images/AboutVert.jpg'
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
import DocomeMobile from './docome-mobile'

const Docome = () => {
    const [name, setName] = useState("");
    const [mail,setMail] = useState("");
    const [message, setMessage] = useState(""); 

    const sendEmail = (e) => {
        // emailjs.send('docome', 'docome', {to_name : 'revital', from_name : name, message : message, from_email: mail, from_phone: '054-3329697'}, 'AdaJ7dw4Wmj9bxnQf')
        //   .then((response) => {
        //     console.log('SUCCESS!', response.status, response.text);
        //   }, (error) => {
        //     console.log('FAILED...', error);
        //   });
        console.log("Email Sent")
      };

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
    });
    
    const isMobileDevice = useMediaQuery({
        query: "(max-device-width: 640px)",
    });
    
    const ScrollToContact = (Section) => {
        const element = document.getElementById(Section)
        if(element){
            element.scrollIntoView({behavior:'smooth'});
        }
    }

    return(
        isDesktop ?
        <Grid container className='DocoMe'>
            {/* Intro Section */}
            <Grid container spacing={0} className= 'intro-section'>
                <Grid item xs = {12} >
                    <img src = {introBook} className = "book-image"></img>
                    {/* <video src={bookVideo} type="video/mp4"></video> */}
                </Grid>
                <Grid item xs = {12} >
                    <p className = "main-headers">מתנה שהיא מזכרת לכל החיים</p>
                </Grid>  
                <Grid item xs = {12} >
                    <Button onClick={() => ScrollToContact('contact-section')} style = {{fontSize : '1vw',borderRadius: '8px' , backgroundColor : '#01054C', color: 'white', boxShadow : '0px 0px 10px rgb(1, 5, 76,0.5)', width:'10%'}}>בואו נדבר</Button>
                </Grid>
            </Grid> 
            {/* Proccess Section */}
            <Grid container  className = "proccess-header">
                    <p className = "main-headers">תהליך היצירה</p>
            </Grid>  
            {/* #step 1 */}
            <Grid container spacing={0} direction='row' className='step'>    
                <Grid item xs = {1.5}></Grid>    
                <Grid item xs = {4} className = 'step-text'>
                    <p className= 'step-header'>נפגשים ומקשיבים לסיפור</p>
                    <p className= 'step-subtext'>ראיונות אישיים המתקיימים בבית,              
במהלך הראיונות נקשיב <br></br>.לסיפור האישי, לזיכרונות ולקולות שעולים
<br></br></p>
                </Grid>
                <Grid item xs = {1}></Grid>
                <Grid item xs = {4}>
                    <img src = {interviewing} className = "step-image"></img>
                </Grid>
            </Grid>   
            {/* #step 2 */}
            <Grid container spacing={0} direction='row-reverse'  className='step'>
                <Grid item xs = {1.5}></Grid>
                <Grid item xs = {4} className = 'step-text'>
                        <p className= 'step-header'>קליק, מצלמים</p>
                        <p className= 'step-subtext'>.מצלמים את אמא, אבא ואת כל המשפחה<br></br>
!המעמד הזה תמיד מאוד מרגש והופך לחוויה חגיגית ומשפחתית<br></br>
</p>
                </Grid>
                <Grid item xs = {1}></Grid>
                <Grid item xs = {4}>
                    <img src = {ClickPhoto} className = "step-image"></img>
                </Grid>
            </Grid> 
            {/* #step 3*/}
            <Grid container spacing={0} direction='row' className='step'>    
                <Grid item xs = {1.5}></Grid>    
                <Grid item xs = {4} className = 'step-text'>
                    <p className= 'step-header'>משלבים מידע משלים</p>
                    <p className= 'step-subtext'>מאתרים מידע היסטורי ברמה הלאומית והבינלאומית המתממשק<br></br> 
                עם הסיפורים במסע החיים. בנוסף, עושים סדר בתמונות מהעבר
<br></br> .ובוחרים את אלו שמשלימות את הסיפור הכתוב<br></br>
.מרכזים תעודות, הזמנה לחתונה ועוד מסמכים חשובים מהחיים</p>
                </Grid>
                <Grid item xs = {1}></Grid>
                <Grid item xs = {4}>
                    <img src = {additiveInfo} className = "step-image"></img>
                </Grid>
            </Grid>   
            {/* #step 4 */}
            <Grid container spacing={0} direction='row-reverse'  className='step'>
                <Grid item xs = {1.5}></Grid>
                <Grid item xs = {4} className = 'step-text'>
                        <p className= 'step-header'>נהנים ביחד</p>
                        <p className= 'step-subtext'>מגיעים לאירוע משפחתי חגיגי ומנחים פעילות חוויתית מלכדת<br></br> 
                        לכל המשפחה. בני המשפחה מעלים סיפורים זכרונות וחוויות<br></br>
.משותפות שמעניקים רובד נוסף לסיפור החיים</p>
                </Grid>
                <Grid item xs = {1}></Grid>
                <Grid item xs = {4}>
                    <img src = {gettingThePresent} className = "step-image"></img>
                </Grid>
            </Grid>      
            {/* Who's for Section */}
            <Grid container className='whos-section'>
                <Grid item xs = {12}>
                <p className = "main-headers">למי מתאים לתת במתנה סיפור חיים של דוקו-מי</p>
                </Grid>
                <Grid container className='whos-row'>
                        <Grid item xs = {1.5}></Grid>
                        <Grid item xs = {4} className='whos-image-container'>      
                            <div className='whos-image-container-div'></div>                  
                            <img src = {Family} className = "whos-image"></img>
                            <p className='whos-image-header'>משפחה</p>
                            <p className='whos-image-text'>שרוצה ליצוק את סיפור יצירת המשפחה לתוך ספר חוויתי</p>             
                        </Grid>
                        <Grid item xs = {1}></Grid>
                        <Grid item xs = {4} className = "whos-image-container">
                            <div className='whos-image-container-div'></div>    
                            <img src = {OldCouple} className = "whos-image"></img>
                            <p className='whos-image-header'>סבא וסבתא</p>
                            <p className='whos-image-text'>למי שרוצה לתעד את הסיפור המשפחתי המיוחד ולייצר נכס משמעותי לדורות הבאים</p>
                        </Grid>
                </Grid>
                <Grid container className='whos-row'>
                    <Grid item xs = {1.5}></Grid>
                        <Grid item xs = {4} className = "whos-image-container">
                            <div className='whos-image-container-div'></div>    
                            <img src = {Parents} className = "whos-image"></img>
                            <p className='whos-image-header'>אמא, אבא או אדם יקר</p>
                            <p className='whos-image-text'>שחוגגים יום הולדת או מאורע משמח </p>
                        </Grid>
                        <Grid item xs = {1}></Grid>
                        <Grid item xs = {4} className = "whos-image-container">
                            <div className='whos-image-container-div'></div>    
                            <img src = {BuisnessWoman} className = "whos-image"></img>
                            <p className='whos-image-header'>איש/ אשת עסקים</p>
                            <p className='whos-image-text'>שרוצים לארוז את כל הידע ואת הדרך שפיתחו למסמך אחד בעל ערך</p>
                        </Grid>
                </Grid>
            </Grid>
            {/* Package Section */}
            <Grid container className='package-section'>
                <Grid container xs= {5.5} className = 'package-text' direction= 'column'>
                    <Grid item xs ={2}> 
                        <p className = "main-headers">חבילת דוקו-מי</p>
                    </Grid>
                    <Grid item xs = {1} container direction= 'row-reverse' className = 'package-row'>
                        <Grid item  xs = {0.7} className = 'package-row-icon'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='package-subtext'>
                            <p>פגישה אישית בבית הלקוח למעבר על הסיפורים</p>
                        </Grid>        
                    </Grid>
                    <Grid item xs = {1} container direction= 'row-reverse' className = 'package-row'>
                        <Grid item  xs = {0.7} className = 'package-row-icon'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='package-subtext'>
                            <p>יום צילומים במגוון מיקומים</p>
                        </Grid>        
                    </Grid>
                    <Grid item xs = {1} container direction= 'row-reverse' className = 'package-row'>
                        <Grid item  xs = {0.7} className = 'package-row-icon'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='package-subtext'>
                            <p>כתיבת ועריכת הסיפורים בצורה שתשמור את כל המסרים</p>
                        </Grid>        
                    </Grid>
                    <Grid item xs = {1} container direction= 'row-reverse' className = 'package-row'>
                        <Grid item  xs = {0.7} className = 'package-row-icon'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='package-subtext'>
                            <p>הגעה ביום הענקה וצילום המשפחה</p>
                        </Grid>        
                    </Grid>
                    <Grid item xs = {1} container direction= 'row-reverse' className = 'package-row'>
                        <Grid item  xs = {0.7} className = 'package-row-icon'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='package-subtext'>
                            <p>גלריית תמונות מהצילומים הכוללת גם צילומים שלא נכנסו לספר</p>
                        </Grid>        
                    </Grid>
                    <Grid item xs = {1} container direction= 'row-reverse' className = 'package-row'>
                        <Grid item  xs = {0.7} className = 'package-row-icon'>
                            <CameraAltIcon></CameraAltIcon>
                        </Grid>
                        <Grid item xs = {11} className='package-subtext'>
                            <p>ספר דוקו-מי</p>
                        </Grid>        
                    </Grid>
                    <Grid item xs = {2}></Grid>
                    <Grid container item xs = {1} className = 'package-button'>
                        <Grid item xs = {0.5}></Grid>
                        <Grid item xs = {5}>
                        <Button onClick={() => ScrollToContact('contact-section')} style = {{fontSize : '1vw' ,borderRadius: '8px', backgroundColor : 'rgb(1, 5, 76)', color: 'white', boxShadow : '0px 0px 10px rgb(1, 5, 76,0.5)', width: '80%'}}>להזמנת מתנה בלתי נשכחת</Button>
                        </Grid>
                        
                    </Grid>     
                </Grid>
                <Grid item xs= {0.5}>
                </Grid>
                <Grid item xs = {6}>
                    <img src = {Packagebook} className = "package-image"></img>
                </Grid>
                
            </Grid>
             {/*about Section */}
            <Grid container className='contact-section'>
                <Grid item xs= {1}>
                </Grid>
                <Grid item xs = {5}>
                    <img src = {AboutMe} className = "contact-image"></img>
                </Grid>
                <Grid container xs= {5} className = 'package-text' direction= 'column'>
                    <Grid item xs ={1}> 
                        <p className = "main-headers">אז מי אנחנו</p>
                    </Grid>
                    <Grid container item xs ={4}> 
                        <p className = "about-subtext">את צוות דוקו-מי מובילות סימה ורויטל<br></br>
סימה היא סיפורולוגית ומטפלת רגשית ורויטל היא צלמת מקצועית<br></br>
שתיהן עוסקות בתחום שהן הכי אוהבות<br></br>
<br></br>
יחד הן מגיעות בצוות דוקו-מי<br></br>
 צלמת מקצועית ומוכשרת שמעבר לעבודה המקצועית פשוט אוהבת<br></br>
 אנשים ויודעת לתת ביטוי ויזואלי למי שהם באמת
ולצידה<br></br> אשת מילים שהיא גם מטפלת רגשית שסקרנית לצלול כל פעם מחדש אל תוך סיפור החיים, להקשיב גם לאלה שלא נאמרים <br></br>
ולתת חיים חדשים לרגשות, חוויות וזכרונות<br></br><br></br>
?אז איך נולד דוקו-מי<br></br>
הילדים שלנו למדו יחד לפני שנים, יום אחד נפגשנו במאפייה השכונתית<br></br>
והחלפנו כמה מילים. באותה העת שתינו היינו בתפקידי ניהול בכירים בעולמות שונים<br></br>
גילינו ששתינו נמצאות בצומת דרכים בקריירה. אחת התחברה לתחום הצילום והאחרת לאהבת הכתיבה ולתחום הטיפול
<br></br>
חברה משותפת שחיפשה מתנה מקורית להוריה בקשה מאיתנו להביא כל אחת את כשרונותיה היחודיים
ולייצר תיעוד לסיפור חייהם<br></br>
ההתרגשות העצומה של הוריה של אותה חברה כשקבלו לידיהם את האלבום<br></br>
!הביא אותנו להבנה שאנו חייבות להמשיך ולשחזר את ההצלחה
</p>
                    </Grid>
                   
                </Grid>
            </Grid>
            {/* Contact Section */}
            {/*
            <Grid container className='contact-section'>
                <Grid item xs = {12} className='contact-header' >
                    <p className = "main-headers">צרו קשר</p>
                </Grid>  
                <Grid item xs = {1}></Grid>
              
                <Grid container item xs = {4.5} className='contact-social-form-container'>
                    <Paper style = {{width:'100%'}}>
                        <Grid container direction={'column'} className='contact-social-form'>
                            <Grid container item xs = {1}  className='contact-social-form-content'>
                                <p>שם מלא</p>
                            </Grid>
                            <Grid container item xs = {1}  className='contact-social-form-content'>
                                <TextField style = {{direction : 'rtl', width: '70%'}} value = {name} onChange = {(event) => setName(event.target.value)}></TextField>
                            </Grid>
                            <Grid container item xs = {1}  className='contact-social-form-content'>
                                <p>מייל</p>
                            </Grid>
                            <Grid container item xs = {1}  className='contact-social-form-content'>
                                <TextField style = {{direction : 'ltr', width: '70%'}} value = {mail} onChange = {(event) => setMail(event.target.value)}></TextField>
                            </Grid>
                            <Grid container item xs = {1}  className='contact-social-form-content'>
                                <p>הודעה שתרצה להשאיר</p>
                            </Grid>
                            <Grid container item xs = {3}  className='contact-social-form-content'>
                                <TextField multiline minRows={3} style = {{direction : 'rtl', width: '70%'}} value = {message} onChange = {(event) => setMessage(event.target.value)}></TextField>
                            </Grid>
                            <Grid container item xs = {1}  className='contact-social-form-button'>
                                <Button style={{fontSize : '0.8vw'}} onClick = {() => {sendEmail()}}>להזמנה או יצירת קשר</Button>
                            </Grid>
                        </Grid>     
                    </Paper>
                </Grid>
               
                <Grid container item xs = {1} direction={'column'}>
                    <hr className="contact-divider"></hr>
                    <p className='contact-social-addresses'>או</p>
                    <hr className="contact-divider"></hr>
                </Grid>
               
                <Grid container item xs = {4.5} className='contact-social' direction={'column'}>
                        <Grid item xs = {2} className='contact-header' >
                            <p className = "contact-sub-header">חפשו אותנו ברשתות החברתיות</p>
                        </Grid>
                        <Grid container item xs = {2} className = "contact-social-icon">
                            <a href = "https://instagram.com/doco.me?igshid=YmMyMTA2M2Y="><InstagramIcon style={{fontSize : '2.8vw', borderRadius:'10px',color : '#211F58' }}/></a>
                        </Grid>
                        <Grid container item xs = {2} className = "contact-social-icon">
                            <a href = "https://wa.me/0543329697"><WhatsAppIcon  style={{fontSize : '2.8vw', color : '#211F58'}}/></a>
                        </Grid>
                        <Grid container item xs = {2} className = "contact-social-icon">    
                            <a href = "https://www.facebook.com/itsdocome?mibextid=ZbWKwL"><FacebookIcon style={{fontSize : '2.8vw' , color : '#211F58'}}/></a>  
                        </Grid>
                        <Grid container item xs = {2} className = 'contact-social-addresses'>
                            <Grid item xs = {6}>
                                <p>טלפון</p>
                                <p>054-3329697</p>
                            </Grid>
                            <Grid item xs = {6}>
                                <p>מייל</p>
                                <p>rosenbergdan6@gmail.com</p>
                            </Grid>
                        </Grid>
                </Grid>
                <Grid item xs = {1}></Grid>
            </Grid>
             */}
            <Grid container className = 'contact-section' id = 'contact-section'>
                <Grid item xs = {1}></Grid>
                <Grid item xs = {5}>
                    <img src = {notebookAndCamera} className = "contact-image-2"></img>
                </Grid>
                <Grid item xs = {1}></Grid>
                <Grid container item xs = {4} className='contact-social-form-container-2'>
                    <Grid item xs = {12} className='contact-header-2'>
                        <p className = "main-headers">צרו קשר</p>
                    </Grid>  
                    <Grid container item xs = {12} direction = 'column' className='contact-social-form-container-2'>   
                        <Grid item xs = {1} style = {{width: "100%"}}>
                            <TextField label = "Full Name" style = {{direction : 'rtl', width: '100%', marginTop :'10%'}} value = {name} onChange = {(event) => setName(event.target.value)}></TextField>  
                        </Grid>
                        <Grid item xs = {1} style = {{width: "100%"}}>
                            <TextField label = "Mail" style = {{direction : 'rtl', width: '100%', marginTop :'5%'}} value = {mail} onChange = {(event) => setMail(event.target.value)}></TextField>                        
                        </Grid>
                        <Grid item xs = {1} style = {{width: "100%"}}>
                            <TextField label = "Type your message here" multiline minRows={7}  style = {{direction : 'rtl', width: '100%', marginTop :'5%'}} value = {message} onChange = {(event) => setMessage(event.target.value)}></TextField>    
                        </Grid> 
                        <Grid container item xs = {1} style = {{width: "100%", justifyContent: 'center', marginTop : ' 10%'}}>
                            <Button style={{width: "40%", fontSize : '1vw',borderRadius: '8px', backgroundColor : 'rgb(1, 5, 76)', color: 'white'}} onClick = {() => {sendEmail()}}>חזרו אליי</Button>
                        </Grid>    
                    </Grid>
                    <Grid container item xs = {6} >
                            <a href = "https://instagram.com/doco.me?igshid=YmMyMTA2M2Y="><InstagramIcon style={{fontSize : '2.8vw', borderRadius:'10px',color : '#211F58' }}/></a>
                            <a href = "https://wa.me/0542514444"><WhatsAppIcon  style={{fontSize : '2.8vw', color : '#211F58'}}/></a>
                            <a href = "https://www.facebook.com/itsdocome?mibextid=ZbWKwL"><FacebookIcon style={{fontSize : '2.8vw' , color : '#211F58'}}/></a>  
                    </Grid>
                    <Grid item xs = {6} style = {{direction: 'rtl', color : '#211F58'}}>
                            <p style = {{fontWeight: '500', marginTop:'5vh'}}>פרטי התקשרות</p>
                            <p style = {{lineHeight:'2.5vh', margin: '0 0 0 0'}}>054-2514444 <br></br> rparzelina@gmail.com</p>
                          
                    </Grid>
              
                </Grid>
            </Grid>


            
        </Grid> : 
        <Grid container className='DocoMeMobile'>
             <DocomeMobile></DocomeMobile>
        </Grid>
    );
}

export default Docome