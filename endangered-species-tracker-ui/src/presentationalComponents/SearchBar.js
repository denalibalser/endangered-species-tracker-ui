import React from 'react'
import SpeciesSearchResults from './SpeciesSearchResults'

const SearchBar = (props) => {
    const BarStyling = {margin: "0.75rem", width:"20rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};
        
    return (
        <>
            <input 
                style={BarStyling}
                key="random1"
                value={props.searchState.query}
                placeholder={"search endangered species"}
                onChange={(event) => props.changeState(event)}
            />
            <SpeciesSearchResults results={props.searchState.filteredData} />
        </>
    ) 
}

export default SearchBar; 