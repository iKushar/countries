import React from "react"


function SearchBar({setQuery}){
    const onInputChange = (e) =>{
        setQuery(e.target.value.toLowerCase())
    }

    return (
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input onChange={onInputChange}
            type="text" placeholder="Search for a country..."
          />
        </div>
      )
}
export default SearchBar