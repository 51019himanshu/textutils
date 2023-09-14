// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  // advantage of using the toggle function and states here is that, we want to change the background color with toggle 
  // so if the switch clicked and toogle funciton runs and if the mode is light then it will change to dark 
  // and with that we can also add
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#010f24'
      // below I am using alert
      showAlert("Dark Mode is Enabled", "success") //giving argument (message, type) for function showAlert
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      // below I am using alert
      showAlert("Light Mode is Enabled", "success") //giving argument (message, type) for function showAlert
    }
  }



  // Alert state
  const [alert, setAlert] = useState(null);

  // creating method for alert and we will make alert as an object because we want to pass both messages and type
  const showAlert = (message, type) => {
    // creating object
    setAlert({
      msg: message,
      type: type
    })
    // adding time out so that the alert message will automatically vanishes after sometime and I also removed the close button from the Alert.js component
    setTimeout(() => {
      setAlert(null);
    }, 2000); //timeout seconds in miliseconds
  }




  return (
    <>
      {/* <Router> */}
        <Navbar title="TextTools" aboutText="About TextUtils" myMode={mode} toggleMode={toggle} />

        <Alert alert={alert} />

        <div className="container my-5"> {/* my-5 means margin in top-bottom */}
          <Textform heading="Enter the text below to analyze" 
            myMode={mode} showMeAlert={showAlert} />
          
          {/* <Routes>
            <Route path="/about" element={<About myMode={mode} />}></Route>
            <Route path="/" element={<Textform heading="Enter the text below to analyze" 
            myMode={mode} showMeAlert={showAlert} />}></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
