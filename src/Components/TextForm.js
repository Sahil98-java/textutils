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
    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
            <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#042743'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange} id="myBox" rows="8" value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text </button>

            </div>
            <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter Something to preview it here'}</p>
            </div>
        </>
    )
}