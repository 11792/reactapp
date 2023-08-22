import logo from './logo.svg';
import './App.css';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';
import { Guide } from './Components/Guide';
import { ResumePurpose } from './Components/ResumePurpose';
import { WorkExperience } from './Components/WorkExperience';
import { useState } from 'react';
function App() {
  const [login,setLogin]=useState(false);
  const [signup,setSignUp]=useState(false);

  function handleSignUp()
  {
    setSignUp(true)
  }

function handleLogin()
  {
    setLogin(true)
  }

  return <>
     { signup ? (
        <Signup />
     ) : login ? (
        <Login />
      ) : (

        <div style={{width: 640, height: 580, position: 'relative', background: 'white'}}>
        <div style={{width: 409, height: 175, left: 90, top: 325, position: 'absolute', color: 'black', fontSize: 19, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Are you ready to take your career to new heights? At R for Resume is empowering professionals like you by crafting exceptional resumes that showcase your true potential.<br/></div>
        <div style={{width: 590, height: 36, left: 90, top: 280, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Inter', fontWeight: '550', wordWrap: 'break-word'}}>We are Crafting Resumes that Shine<br/></div>
        <div style={{width: 152, height: 48, left: 1085, top: 44, position: 'absolute', background: '#3BD22E', borderRadius: 15}} />
        <div style={{width: 374, height: 61, left: 90, top: 450, position: 'absolute', background: '#3BD22E', borderRadius: 15}} />
        <div onClick={handleSignUp} style={{width: 180, height: 39, left: 1122, top: 54, position: 'absolute', color: 'white', fontSize: 22, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word',cursor:"pointer"}}>Sign up</div>
        <div onClick={handleSignUp} style={{width: 590, height: 39, left: 156, top: 465, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word',cursor:"pointer"}}>Build Your Resume Now</div>
        <div style={{width: 500, height: 39, left: 90, top: 189, position: 'absolute', color: '#3BD22E', fontSize: 35, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Tailored Resumes for Your Success </div>
        <div onClick={handleLogin} style={{width: 90, height: 39, left: 981, top: 59, position: 'absolute', color: '#3BD22E', fontSize: 22, fontFamily: 'Inter', fontWeight: '530', wordWrap: 'break-word',cursor:"pointer"}}>Login</div>
        <img style={{width: 330, height: 400, left: 622, top: 224.24, position: 'absolute', transform: 'rotate(-15.25deg)', transformOrigin: '0 0', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} src="../images/back.png" />
        <img style={{width: 330, height: 460, left: 772, top: 145, position: 'absolute', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} src="../images/middle.png" />
        <img style={{width: 330, height: 440, left: 909.52, top: 119, position: 'absolute', transform: 'rotate(10.17deg)', transformOrigin: '0 0', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} src="../images/front.png" />
       
        <img style={{width: 309, height: 60, left: 90, top: 51, position: 'absolute'}} src="../images/logo1.png" />
       
      </div>
 
)



}

</>
  

      }
export default App;
