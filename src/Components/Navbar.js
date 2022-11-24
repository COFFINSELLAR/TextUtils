import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
//Default export and not named export
export default function Navbar(props) {

  const [darkmode,setDarkMode] = useState('light');
 
  
  const toggleDarkMode= ()=>{
    if (darkmode === 'light'){
      //setDarkMode(val);
      document.body.style.backgroundColor= 'white';
      setDarkMode(darkmode);
      //showAlert("dark Mode has been enabled","success");
    }
    else{
      //setDarkMode(val);
      
      document.body.style.backgroundColor= darkmode;
      setDarkMode(darkmode);

     // showAlert("Light Mode has been enabled","success");
     }
    
}

useEffect(() => {
  toggleDarkMode();
}, [darkmode])

  return (
    <>
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title} </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.About}</a>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-check-inline text-${props.mode==='light'?{darkmode}:'light'}`} >
      <input className="form-check-input" onClick={(e) =>{setDarkMode(e.target.value)}} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="#ef3f47"/>
      <label className="form-check-label"  forHtml="inlineRadio1">Red</label>
      </div>
      <div className={`form-check form-check-inline text-${props.mode==='light'?'green':'light'}`}>
      <input className="form-check-input" onClick={(e) =>{setDarkMode(e.target.value)}} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="#0dcaf0"/>
      <label className="form-check-label" forHtml="inlineRadio2">Blue</label>
      </div>
      <div className={`form-check form-check-inline text-${props.mode==='light'?'orange':'light'}`}>
      <input className="form-check-input" onClick={(e) =>{setDarkMode(e.target.value)}} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="orange" />
      <label className="form-check-label" forHtml="inlineRadio3">Orange</label>
  </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlforHtml="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
  
</nav>
</>
  )
}
//Props initialization
Navbar.propTypes = {
  title: PropTypes.string,
  About: PropTypes.string
}
// Default Props Initialization
// Navbar.defaultProps ={
//   title: 'set title here',
//   About: 'About Text Here'
// }