import React, { Component } from 'react'
import  SearchBar  from './SearchBar'
// import SpeciesSearchResults from './SpeciesSearchResults'
import { connect } from 'react-redux'
import { fetchAllAnimals } from '../redux/actions/animalActions'


class SearchPage extends Component {

    // state = { //can move all of this loading logic to loading reducer so it can be reused
    //     animals: []
    // }
    
    // addAnimals = () => {
    //     this.setState({
    //       animals: this.props.fetchAllAnimals()
    //     })
    // }
    // componentDidMount() {
    //     this.addAnimals(); 
    //     console.log(this.state)
    // }
    
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

