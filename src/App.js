import React, {useState} from 'react';
import axios from 'axios'

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  return (
    <div className="app">
      <div className="container">
          <div className="location">
              <p>Medellin</p>
          </div>
          <div className="temp">
              <h1>60°F</h1>
          </div>
          <div className="description">
              <p>Weather</p>
          </div>
      </div>
      <div className='botton'>
          <div className="feels">
             <p>65°F</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='humidity'>
           12 MPH
          </div>
      </div>
    </div>
  );
}

export default App;
