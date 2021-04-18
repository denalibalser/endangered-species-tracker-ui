import React, { Component } from 'react'
import  SearchBar  from '../presentationalComponents/SearchBar'
import { connect } from 'react-redux'
import { fetchAllSpecies } from '../redux/actions/speciesActions'

class SearchPage extends Component {

    state = {
        filteredData: []
    }
    
    componentDidMount() {
        this.props.fetchAllSpecies(); 
    }

    changeState = (event) => {
        const query = event.target.value
        this.setState({
            filteredData: this.props.allSpecies.filter(species => {
                if(query !== '') {
                    // return species[0].charAt(0).toLowerCase().includes(query.toLowerCase()) //need to figure out way to search by more than just first letter 
                    return species[0].toLowerCase().includes(query.toLowerCase()) //need to figure out way to search by more than just first letter 

                }
            })
        })
    }

    render() {
        return (
            <div>
                <SearchBar 
                    allSpecies={this.props.allSpecies} 
                    searchState={this.state} 
                    loadingAllSpecies={this.props.loadingAllSpecies} 
                    changeState={this.changeState}
                /> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allSpecies: state.species.endangeredSpecies,
        loadingAllSpecies: state.species.loading
    }
}

export default connect(mapStateToProps, { fetchAllSpecies })(SearchPage);

