import React,{useState} from 'react'

export default function TextForm(props) {

  
  const handleUpClick= ()=>{
    console.log("To Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  } 

  const manageSpace= ()=>{
    console.log("To Manage Space was clicked"+text);
    let newText=text.replace(/\s+/g, ' ');
    setText(newText);
  } 
  const handleLoClick= ()=>{
    console.log("To MAnage Space was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
    
  } 

  const handleClear= ()=>{
    console.log("Clear Text was clicked"+text);
    let newText="";
    setText(newText);
  }

  const handleOnChange= (event)=>{
    console.log("To OnChange was clicked");
    setText(event.target.value);
  } 
  
  const [text,setText] = useState('Please Enter Text Here');
  //setText("new text"); correct way to set the state for eg:-text

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1> 
        <div className="mb-3" >
        <textarea className="form-control" value={text} id="myBox" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} rows="5" onChange={handleOnChange}>     
        </textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary " onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2 " onClick={manageSpace}>Manage Space</button>

        </div>
       
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your summary here</h1>
      <h4>{text.split(" ").length} Words and {text.length} Characters</h4>
      <p>Time taken to read the text in minutes:-{0.008*text.length} minutes</p>
      <h2 className="my-3">Preview</h2>
      <p rows="5">{text.length>0?text: "Please Enter something to preview"} </p>

    </div>
    </>
  )
}

