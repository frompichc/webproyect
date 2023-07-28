import React from "react"
import { Country } from "./Country"

const ShowCountry = (namecountry, setCountry) => {
    setCountry(namecountry)
}

const Countries = ( {countries, setCountry} ) => {
    
    if (countries !== undefined) {
        const arrayCountries = Object.values(countries)
        if (countries.length === 1) return <Country countries={arrayCountries} />
        else if(countries.length >=2 && countries.length <= 10) {
            return (
                <table>
                    <tbody>
                    {arrayCountries.map((country, index) => {
                        return (
                            <tr key={index}>
                                <td>{country.name.common}</td>
                                <td><button onClick={() => ShowCountry(country.name.common, setCountry)}>Show</button></td>  
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            )
        } else return <div>Too many matches, specify another filter.</div>
    }
}

export { Countries }