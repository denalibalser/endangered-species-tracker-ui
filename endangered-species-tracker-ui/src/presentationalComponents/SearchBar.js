import React from 'react'
import SpeciesSearchResults from './SpeciesSearchResults'

const SearchBar = (props) => {
        
    return (
        <div>
            <div className="p-8">
                <div class="bg-white flex items-center rounded-full shadow-xl">
                    <input 
                        id="search"
                        className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                        type="text"
                        value={props.searchState.query}
                        placeholder={"search endangered species"}
                        onChange={(event) => props.changeState(event)}
                    />  
                </div>
            </div>
            <SpeciesSearchResults results={props.searchState.filteredData} />
        </div>  
    ) 
}

export default SearchBar; 

