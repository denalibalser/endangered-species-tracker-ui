import React, { Component } from 'react'
import  SearchBar  from '../presentationalComponents/SearchBar'
import { connect } from 'react-redux'
import { fetchAllSpecies } from '../redux/actions/speciesActions'

class SearchPage extends Component {

    state = {
        query: '',
        filteredData: []
    }
    
    componentDidMount() {
        this.props.fetchAllSpecies(); 
    }

    changeState = (event) => {
        const query = event.target.value
        this.setState({
            query: event.target.value, 
            filteredData: this.props.allSpecies.filter(element => {
                if(query !== '') {
                    return element[0].charAt(0).toLowerCase().includes(query.toLowerCase())
                }
            })
        })
    }

    render() {
        console.log(this.state) //REMEMBER TO REMOVE!!
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

