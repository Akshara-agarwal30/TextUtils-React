
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 /* import About from './components/About'; */
import React,{ useState } from 'react';
import Alert from './components/Alert';
 /*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"; */


function App() {
  const [myMode, setMode]= useState('light');
  const [myAlert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
         setAlert(
          {
            msg:message,
            type:type
          }
         )
         setTimeout(() => {
          setAlert(null)
         }, 2000);
  }
  const toggleMode=()=>{
    if(myMode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="rgb(12 28 51)";
      document.body.style.color="white";
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils- Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils- Light Mode';
    }
  }
  return (
    <>
    
  <Navbar title="TextUtils" aboutText="About us" mode={myMode} toggleMode={toggleMode}/>
  <Alert alert={myAlert}/>
 
  <div className="container my-3" >
 
 
           <TextForm showAlert={showAlert} heading="Enter text below"/>
         
          
  
        </div>


  
    </>
  );
}

export default App;

/* <Router>
  <Navbar title="TextUtils" aboutText="About us" mode={myMode} toggleMode={toggleMode}/>
  <Alert alert={myAlert}/>
 
  <div className="container my-3" >
 
  <Routes>
      /users --->component 1
        /users/home --->component 2 but react does partial matching so component 2 mei bhi 1 dikha dega therefore we use keyword exact 

         also change <a> </a> to link and to in navabar compoenet 
        
        <Route exact path="/about" element={<About />}>
          
        </Route>
        <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter text below"/>}>
       
        </Route>
      </Routes>

      </div>
</Router> 
*/ 