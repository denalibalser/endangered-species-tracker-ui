import React, { Component } from 'react'
import  SearchBar  from './SearchBar'
import { connect } from 'react-redux'
import { fetchAllAnimals } from '../redux/actions/animalActions'


class SearchPage extends Component {
    
    componentDidMount() {
        this.props.fetchAllAnimals(); 
    }

    render() {
        return (
            <div>
                <SearchBar species={this.props.species} /> 
                {/* search={this.props.fetchAllAnimals} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        species: state.animals.endangeredAnimals
    }
}

export default connect(mapStateToProps, { fetchAllAnimals })(SearchPage);

