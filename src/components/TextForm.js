import React, { useState } from 'react'

export default function TextForm(props) {
    const textfunction=()=>{
   
      const words = text.trim().split(/\s+/);
      return words.filter(word => word.length > 0).length;
    }
    const handleUpClick=()=>{
        console.log("Uppercase button clicked");
       // setText("You have clicked on handleUpClick" );
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to uppercase", "success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleLowClick=()=>{
        console.log("Convert to LowerCase button clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleTitleClick=()=>{
        console.log("Convert to TitleCase button clicked");
        let newText = text.toLowerCase().split(' ');
  for (var i = 0; i < newText.length; i++) {
    newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1); 
  }
  setText(newText.join(' '));
  props.showAlert("Converted to titlecase", "success");
    }
    const handleClear=()=>{
        console.log("Clear Text");
        let newText="";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleCopy=()=>{
      console.log("Copying Text");
      
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied to clipboard", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
}

const[text, setText]=useState("Enter text here");
  return (
    <>
    <div className='container'>
    <h2>{props.heading}</h2>
<div className="mb-3">
 
<textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
<button className="btn btn-primary mx-3" onClick={handleLowClick} >Convert to LowerCase</button>
<button className="btn btn-primary mx-3" onClick={handleTitleClick} >Convert to TitleCase</button>
<button className="btn btn-primary mx-3" onClick={handleClear} >Clear Text</button>
<button className="btn btn-primary mx-3" onClick={handleCopy} >Copy Text</button>
<button className="btn btn-primary mx-3" onClick={handleExtraSpaces} >Remove Spaces</button>
    </div>
    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p> {textfunction()} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} minutes to read </p>
        <h3>Preview</h3>

        <p>{text.length >0 ? text: "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
