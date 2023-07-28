import React from "react"

const handleChange = (setCountry) => (event) =>{
    setCountry(event.target.value)
} 


const Search = ( {setCountry}) => {
    return (
        <div>
            Find countries: <input
            onChange={handleChange(setCountry)} />
        </div>
    )
}

export { Search}