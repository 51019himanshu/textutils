import React from "react";
import { useState } from "react"; //here we called useState hook from react


export default function Textform(props) {

  // this is for buttons
  const [text, setText] = useState(""); //I am not giving any initial value because, I added a placeholder text in the 
  // textbox area html 

  //this is called hooks, here we change the text to setText by the help of functions


  //changes to UpperCase
  const handleUpperClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    // using below alert
    props.showMeAlert("Changed to Upper Case", "success");
  }

  //changes to LowerCase
  const handleLowClick = () => {
    // console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    // using below alert
    props.showMeAlert("Changed to Lower Case", "success");
  }

  // gives us the write and delete the texts in the textbox
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value); //this line helps us to write or delete the texts in textarea, whatever we write the text 
    // gets update by the value given in this line, and it then stores that new text which you had changed or added
  }

  // Bold all the texts
  const handleTextBolding = () => {
    let myContent = document.getElementById('myBox');
    let bolding = document.getElementById('boldbutton')

    bolding.addEventListener('click', function (event) {
      myContent.style.fontWeight = 'bold';
    })
    // using below alert
    props.showMeAlert("All the texts gets Bolded", "success");
  }

  // remove bold texts or returns the texts in its initial state
  const handleTextNormal = () => {
    let myContent = document.getElementById('myBox');
    let normal = document.getElementById('normaltxtbutton');
    normal.addEventListener('click', function (event) {
      myContent.style.fontWeight = 'initial';
    })
    // using below alert
    props.showMeAlert("All the texts gets to Normal", "success");
  }

  // copy all texts in the textbox
  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    // using below alert
    props.showMeAlert("Copied to Clipboard!", "success");
  }

  //remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/g); //here we are removing all extra spaces and put all the texts in the form
    //  of array and store it to the newText and then we are using state hook of another variable and pass that to join the 
    // array texts with only single space 
    setText(newText.join(" "))
    // using below alert
    props.showMeAlert("Removed all extra spaces!", "success");
  }

  // capitalize every letter of the words
  const handleCapitalize = () => {
    const arr = text.split(/[\s]+/g)
    const newArr = []
    arr.forEach((txt) => {
      newArr.push(txt[0].toUpperCase() + txt.slice(1))
    })
    // using below alert
    props.showMeAlert("Capitalized every first character of each word", "success");
    return setText(newArr.join(" "))
  }


  const handleClearAll = ()=>{
    setText("")
    // using below alert
    props.showMeAlert("Cleared all text!", "success");
  }


  // upto this point we worked for buttons
  return (
    <>
      <div className="container1" style={{ color: props.myMode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" placeholder="Enter the text here" value={text} onChange={handleOnChange} rows="10" style={{ backgroundColor: props.myMode === 'light' ? 'white' : 'black', color: props.myMode === 'light' ? 'black' : 'white' }}>
            {/* In the textarea line above we have to use the onChange event listener, so that we can write and delete 
          our texts in the textarea whenever we fit. */}
          </textarea> {/* here we pass value={text} for 
        using the text from the hooks syntax and pass the value we give in the boxinput. here we also used 
        onChange = {handleOnChange} this is like an event whenever after the setText executes if we want to change the 
        text or add some texts in the result string, this event will fire */}
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>Convert to UpperCase</button> {/* btn-primary changes the button color to blue */}
        <button className="btn btn-secondary mx-3" onClick={handleLowClick}>Convert to LowerCase</button> {/* btn-secondary changes the button color to grey */}
        <button className="btn btn-success" id="boldbutton" onClick={handleTextBolding}>Bold</button> {/* btn-success changes the button color to green */}
        <button className="btn btn-danger mx-3" id="normaltxtbutton" onClick={handleTextNormal}>Without Bold</button> {/* btn-danger changes the button color to red */}
        <button className="btn btn-warning" id="copytxt" onClick={handleCopy}>Copy All</button> {/* btn-warning changes the button color to yellow */}
        <button className="btn btn-info mx-3" id="removespace" onClick={handleExtraSpaces}>Remove extra spaces</button> {/* btn-info changes the button color to cyan */}
        <button className="btn btn-dark" id="capitalizing" onClick={handleCapitalize}>Capital every first letter</button> {/* btn-dark changes the button color to black */}
        <button className="btn btn-light mx-3" id="clearAll" onClick={handleClearAll}>Clear All</button> {/* btn-light changes the button color to white */}
      </div>

      <div className="container2 mx-5 my-3" style={{color: props.myMode === 'light' ? 'black' : 'white'}}>
        <h2>Your text summary</h2>
        <p>Number of words is: <b>{text.split(" ").length}</b>, and Number of character is: <b>{text.length}</b></p>
        <p>Time to read(approx): <b>{0.008 * text.split(" ").length}</b> minutes</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
