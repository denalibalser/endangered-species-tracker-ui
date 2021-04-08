import React, { Component } from 'react'
import  SearchBar  from '../presentationalComponents/SearchBar'
import { connect } from 'react-redux'
import { fetchAllAnimals } from '../redux/actions/animalActions'


class SearchPage extends Component {

    state = {
        query: '',
        data: [],
        filteredData: []
    }
    
    componentDidMount() {
        this.props.fetchAllAnimals(); 
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
        console.log(this.state)
        return (
            <div>
                <SearchBar searchState={this.state} changeState={this.changeState}/> 

                {/* <SearchBar query={this.state.query} species={this.state.data} filteredData={this.state.filteredData}/>  */}
                {/* species={this.props.species} */}
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

