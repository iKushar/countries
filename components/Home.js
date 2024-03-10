
import React, { useState } from "react"
import CountriesList from './CountriesList'
import SearchBar  from "./SearchBar";
function Home(){

    const [query, setQuery] = useState('')
    return(
        <main>
            <div className="search-filter-container">
            <SearchBar setQuery={setQuery}/>
            </div>
                
            <CountriesList query={query}/>
        </main>
    )
}
export default Home;