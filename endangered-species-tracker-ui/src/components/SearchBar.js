import React, { Component } from 'react'
import SpeciesSearchResults from './SpeciesSearchResults'

class SearchBar extends Component {

    state = {
        query: '',
        data: [],
        filteredData: []
    }

    componentDidMount() { //maybe take this out of the componentdidmount, is this ok to do? (setState in componentDidMount)
        this.setState({
            data: this.props.species
        })
    }

    handleOnChange = event => {
        const query = event.target.value
        this.setState({
            query: event.target.value, 
            data: [...this.state.data],
            filteredData: this.state.data.filter(element => {
                if(query !== '') {
                    return element[0].charAt(0).toLowerCase().includes(query.toLowerCase())
                    // element[0].charAt(0).toLowerCase().includes(query.toLowerCase())
                }
            })
        })
    }

    render(){ 
        const BarStyling = {margin: "0.75rem", width:"20rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};
        console.log(this.state)
        
        return (
            <>
                <input 
                    style={BarStyling}
                    key="random1"
                    value={this.state.query}
                    placeholder={"search endangered species"}
                    onChange={this.handleOnChange}
                />
                <SpeciesSearchResults results={this.state.filteredData} />
            </>
        ) 
    }
}

export default SearchBar; 