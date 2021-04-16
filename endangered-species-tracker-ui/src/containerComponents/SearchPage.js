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
            filteredData: this.props.allSpecies.filter(element => {
                if(query !== '') {
                    return element[0].charAt(0).toLowerCase().includes(query.toLowerCase())
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

