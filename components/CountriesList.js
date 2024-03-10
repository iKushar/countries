import React, { useEffect,useState } from "react";
import CountryCard from "./CountryCard";

function CountriesList({ query }) {

    const [countriesData, setCountriesData] = useState([])
    const [filteredData, setFilteredData] = useState([])


    useEffect(  () =>{
        const asyncFn = async () => { 
            let data = await fetch('https://restcountries.com/v3.1/all')
            data = await data.json()
            if(data){
                //console.log(data[0].name)
                setCountriesData(data)
               
            }

            const intervalId = setInterval(() => {
                //console.log('running countriesList component');
              }, [1000])
          
              console.log(intervalId);
          
              return () => {
                clearInterval(intervalId)
              }
         };
        asyncFn();
            
            
    },[])


    

  return (
    
         <div className="countries-container">
            {
                
                countriesData && countriesData.filter((country)=>
                        country?.name?.common.toLowerCase().includes(query)
                    ).map((country) => (

                    <CountryCard 
                    key = {country?.name?.common}
                    name = {country.name.common}
                    flag = {country.flags.svg}
                    population = {country.population}
                    region = {country.region}
                     capital = {country.capital?.[0]}
                     data = {country}
                    />

                ))
            }

        </div>
    
    
  )
}
export default CountriesList