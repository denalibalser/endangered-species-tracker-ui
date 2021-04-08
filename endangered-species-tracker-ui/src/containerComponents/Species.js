import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveSpecies } from '../redux/actions/speciesActions'
import { fetchSavedSpecies } from '../redux/actions/speciesActions'

class Species extends Component { //maybe create SpeciesContainer component as stateful parent and make this a functional component

    state = {
        common_name: '',
        scientific_name: '', 
        endangered_level: '', 
        url: '', 
        user_id: ''
    }

    componentDidMount() {
        this.setState({
            common_name: this.props.animal[0], 
            scientific_name: this.props.animal[1].value,
            endangered_level: this.props.animal[2],
            url: this.props.animal[1].url, 
            user_id: this.props.currentUser.id
        })
    }

    handleOnClick = () => {
        this.props.saveSpecies(this.state);
        this.props.fetchSavedSpecies(this.props.currentUser.id) //maybe put this in a higher up component so dont need to call here
    }


    render() {
        return (
            <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
                <ul>
            <h1>{this.props.animal[0]}</h1>
                <li><strong>Scientific Name:</strong> {this.props.animal[1].value}</li>
                <li><strong>Endangered Level:</strong> {this.props.animal[2]}</li>
                <li><a href={this.props.animal[1].url} className="no-underline hover:underline ... text-blue-500" target="_blank" rel="noopener noreferrer"><strong>More Information</strong></a></li>
                <button className="btn" onClick={this.handleOnClick}>Save Species To Dashboard</button>
                </ul>
            </div>
        )
    }  
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { saveSpecies, fetchSavedSpecies })(Species);