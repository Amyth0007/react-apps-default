import React from 'react'
import { useEffect, useState } from 'react';
import './App.css'
function App() {
  
  
  
  const [data, setdata] = useState([])
  const [ query , setquery] = useState("pune")
  // useEffect(() => {
  //     getapi();
    
      
  //   }, )
  
  const getapi= ()=>{
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=4cb0b3eac18d0a3d9b9d43add2649959`)
    .then((Response) => Response.json())
    .then((json)=>{
      console.log(json);
      setdata(json)
    })   ;
    
    
  };
  
function handlechange(e){
    const a = e.target.value
    setquery(a);
}

function rise(a){
        // const unixSunrise = data.sys.a;
  //   const unixSunset = data.sys.sunset;
  const sunrise = new Date(a*1000);
  // const sunset = new Date(unixSunset*1000);
  const dateObject = new Date(sunrise)
  // const dateObjectset = new Date(sunset)

  const humanDateFormatrise = dateObject.toLocaleTimeString();
 
 return humanDateFormatrise;
  // const humanDateFormatset = dateObjectset.toLocaleString()
  // // const sunset = new Date(unixSunset*1000);
}

// const icon = data.weather[0].icon;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
console.log(day);
    return (
    
         <>FetchApi
{/* //<div>
// <input type="text" className="textbox" value={query} onChange={handlechange} placeholder="Search"/>
  
//   <button className='button' ><i class="fad fa-search"></i></button>
//         </div> */}
{/* {feather.replace()} */}

<div className="container">
  <div className="weather-side">
    <div className="weather-gradient"></div>
    <div className="date-container">
      <h2 className="date-dayname">{day}</h2><span className="date-day">{d.getDate()}-{d.getMonth()}-{d.getFullYear()} || {d.getHours() +" : "+ d.getMinutes()}</span><i className="location-icon" data-feather="map-pin"></i><span className="location">
   
<input type="text" className="textbox" value={query} onChange={handlechange} placeholder="Search"/>
  
   <button className='button' onClick={getapi}><i class="fad fa-search"></i></button>
{ data.weather ?  <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Girl in a jacket" width="100px" height="70px" />: null}
      </span>
      {data.sys ? <h3 className="city-desc">{query} , {data.sys.country}</h3>: null}
    </div>
    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
      {data.main ? <h1 className="weather-temp">{Math.trunc(data.main.temp -273)}°C</h1>: null}
    {data.weather ? <h3 className="weather-desc">{data.weather[0].description}</h3>:null}
    </div>
  </div>
  <div className="info-side">
    <div className="today-info-container">
      <div className="today-info">
        <div className="precipitation"> <span className="title">PRECIPITATION</span>{data.clouds?<span className="value">{data.clouds.all}</span>:null}
          <div className="clear"></div>
        </div>
        <div className="humidity"> <span className="title">HUMIDITY</span>{data.main?<span className="value">{data.main.humidity}%</span>:null}
          <div className="clear"></div>
        </div>
        <div className="wind"> <span className="title">WIND</span>{data.main?<span className="value">{data.wind.speed}km/h</span>:null}
          <div className="clear"></div>
        </div>
        <div className="wind"> <span className="title">Sunrise: </span>{data.sys ? <span className="value">{rise(data.sys.sunrise)}</span>:null}
          <div className="clear"></div>
        </div>
        <div className="wind"> <span className="title">Sunset: </span>{data.sys ?<span className="value">{rise(data.sys.sunset)}</span>:null}
          <div className="clear"></div>
        </div>
      </div>
    </div>
    <div className="week-container">
      <ul className="week-list">
        <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">Tue</span>{data.main?<span className="day-temp">{Math.trunc(data.main.temp -269)}°C</span>:null}</li>
        <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span>{data.main?<span className="day-temp">{Math.trunc(data.main.temp -274)}°C</span>:null}</li>
        <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span>{data.main?<span className="day-temp">{Math.trunc(data.main.temp -271)}°C</span>:null}</li>
        <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span>{data.main?<span className="day-temp">{Math.trunc(data.main.temp -275)}°C</span>:null}</li>
        <div className="clear"></div>
      </ul>
    </div>
    {/* <div className="location-container">
      <button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
    </div> */}
  </div>    
</div>
    </>
    )
}

export default App;