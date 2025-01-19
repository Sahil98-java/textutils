import React, { useState } from 'react'

export default function TextForm(props) {


    const handleClear = () => {
        //console.log("Lowercase was clicked"+text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleLowClick = () => {
        //console.log("Lowercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleUpClick = () => {
        //console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleOnChange = (event) => {
        // console.log("OnChange was clicked");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handleTrim = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
            <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#042743'}} >
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange} id="myBox" rows="8" value={text}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear text </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTrim}>Trim spaces </button>

            </div>
            <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split("/\s+/").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to Preview'}</p>
            </div>
        </>
    )
}