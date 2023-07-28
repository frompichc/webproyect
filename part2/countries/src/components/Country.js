import { useEffect, useState } from "react";
import React  from "react";
import countryService from '../services/services'

const Country = ({countries}) => {  
    
    const [weatherIcon, setWeatherIcon] = useState('')
    const [weatherTemperature, setWeatherTemperature] = useState('')
    const [weatherSpeed, setWeatherSpeed] = useState('')
    const [weatherDirection, setWeatherDirection] = useState('')
 
    const countrylan = Object.values(countries[0].languages)

    const weather_api_key = process.env.REACT_APP_API_KEY
    console.log(weather_api_key)
    const weather_url = `http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${countries[0].capital}`
    
    useEffect(() => {
        countryService.getAll(weather_url)
        .then(response => {
        setWeatherIcon(response['current']['weather_icons'][0])
        setWeatherTemperature(response['current']['temperature'])
        setWeatherSpeed(response['current']['wind_speed'])
        setWeatherDirection(response['current']['wind_dir'])
        }).catch( error => {
            console.log('Error al acceder información de clima')
        })
      }, [weather_url])

    return (
        <div>
            <h1>
                {countries[0].name.common   }
            </h1>
            <p>
                Capital: {countries[0].capital} <br></br>
                Population: {countries[0].population}
            </p>
            <h2>Languages</h2>
            <ul>
                {countrylan.map((language, index) => {
                    return <li key={index}>{language}</li>
                })}
            </ul> 
            <div>
                <img src={countries[0].flags.png} alt="Country Flag" width="9%" />
            </div>      
            <h3>Weather in {countries[0].capital}</h3>      
            <div>
                <h4>Temperature</h4>
                <div>{weatherTemperature} Celcius</div>
                <img src={weatherIcon} alt="Weather Icon" width="5%" />
            </div>
            <div>
              <h4>Wind</h4>
              <div>Speed: {weatherSpeed} mph</div>
              <div>Direction: {weatherDirection}</div>
            </div>   
        </div>
    )
}

export { Country }