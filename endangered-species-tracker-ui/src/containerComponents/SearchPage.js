import React, { Component } from 'react'
import  SearchBar  from '../presentationalComponents/SearchBar'
import { connect } from 'react-redux'
import { fetchAllSpecies } from '../redux/actions/speciesActions'

class SearchPage extends Component {

    state = {
        filteredData: []
    }
    
    componentDidMount() {
        if(this.props.loggedIn === true) {
            this.props.fetchAllSpecies(); 
        } 
    }

    changeState = (event) => {
        const query = event.target.value.toLowerCase()
        const allSpecies = this.props.allSpecies
        this.setState({
            filteredData: allSpecies.filter(species => {
                if(query !== '') {
                    return species[0].substring(0, 5).toLowerCase().indexOf(query) === 0
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
        loggedIn: state.auth.loggedIn,
        allSpecies: state.species.endangeredSpecies,
        loadingAllSpecies: state.species.loading
    }
}

export default connect(mapStateToProps, { fetchAllSpecies })(SearchPage);

