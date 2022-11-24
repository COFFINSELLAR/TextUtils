
import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App(props) {

  const [alert,setAlert]= useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  
  const [mode,setMode] =useState('light');
  
  const toggleMode= ()=>{
    if (mode === 'light' ){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("dark Mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }

  return (
    <>
    
      <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}  About= "About TextUtils" />
      <Alert alert={alert}/>
      <div className="container my-3"  >  
      <TextForm showAlert={showAlert} heading=" Enter the Text Here" mode={mode} />
      {/* <About/> */}
      </div>
 
    </>  
  );
}

export default App;
