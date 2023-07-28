import React, { useState, useEffect } from 'react'
import { Search } from './components/Search'
import { Countries } from './components/Countries'
import countryService from './services/services'



function App() {

  const [ country, setCountry ] = useState('')
  const [ countries, setCountries ] = useState([  ])
  
  useEffect(() => {
    let baseUrl = 'https://restcountries.com/v3.1/name/'
    baseUrl = baseUrl + country
    countryService.getAll(baseUrl)
    .catch(error => {
        console.log('error 404')
    })
    .then(response => {
      setCountries(response)  
    })
  },[country])

  return (
    <div>
      <Search setCountry={setCountry}/>
      <Countries countries={countries} setCountry={setCountry}/>
    </div>
    

  )
}

export default App;
