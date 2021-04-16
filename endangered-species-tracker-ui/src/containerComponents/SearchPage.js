import React, { Component } from 'react'
import  SearchBar  from '../presentationalComponents/SearchBar'
import { connect } from 'react-redux'
import { fetchAllSpecies } from '../redux/actions/speciesActions'

class SearchPage extends Component {

    state = {
        query: '',
        data: [],
        filteredData: []
    }
    
    componentDidMount() {
        // this.props.fetchAllSpecies(); 
        this.props.dispatchFetchAllSpecies(); 
        this.setState({
            data: this.props.species
        })
    }

    changeState = (event) => {
        const query = event.target.value
        this.setState({
            query: event.target.value, 
            data: [...this.state.data],
            filteredData: this.state.data.filter(element => {
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
                <SearchBar searchState={this.state} changeState={this.changeState}/> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        species: state.species.endangeredSpecies
    }
}

const mapStateToDispatch = dispatch => {
    return {
        dispatchFetchAllSpecies: () => dispatch(fetchAllSpecies())
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(SearchPage);

// export default connect(mapStateToProps, { fetchAllSpecies })(SearchPage);

