import React, { useState } from "react";
import axios from "axios";

import './App.css';

const App = () => {
  const [advice, setAdvice] = useState([]);

  const fetchAdvice = () => {
      axios.get('https://api.adviceslip.com/advice')
      .then((response)=>{    
          const { advice } = response.data.slip;      
          setAdvice(advice);
      })
      .catch((error)=> {
        console.log(error);
      })
    }

    return (
        <div className="app">
          <div className="card">
            <h1 className="heading"> { advice.length === 0 ? 'Presiona el boton para darte un consejo.' : advice }</h1>
            <button className="button" onClick={fetchAdvice}>
            <span>Dame un consejo</span>
            </button>                    
          </div>
        </div>
    );
}

export default App;