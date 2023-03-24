import React, {useState} from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import  { GeoApiOptions,GEO_API_URL } from '../app/api'


const Search=(props)=> {
    const { onSearchChange} =props
    const [search, setSearch] =useState()


const loadOptions=(inputValue)=>{
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, GeoApiOptions)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city)=>{
                    return{
                        value:`${city.latitude} ${city.longitude}`,
                        label:`${city.name}, ${city.countryCode}`

                    }

                })

            }
            
        })
        .catch(err => console.error(err));
    

}

    const handleOnchange=(searchData)=>{
        setSearch(searchData)
        onSearchChange(searchData)

    }
  return (
    <AsyncPaginate  placeholder="Search city" 
    debounceTimeout={600} 
    value={search} 
    onChange={handleOnchange}
    loadOptions={loadOptions}
    
    />


  )
}

export default Search