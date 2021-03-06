import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveSpecies } from '../redux/actions/speciesActions'

class Species extends Component { 

    state = {
        common_name: '',
        scientific_name: '', 
        endangered_level: '', 
        url: '', 
        user_id: ''
    }

    componentDidMount() {
        this.setState({
            common_name: this.props.species[0], 
            scientific_name: this.props.species[1].value,
            endangered_level: this.props.species[2],
            url: this.props.species[1].url, 
            user_id: this.props.currentUser.id
        })
    }

    handleOnClick = () => {
        this.props.saveSpecies(this.state);
    }

    render() {
        return (
            <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
                <ul>
                    <h1>{this.state.common_name}</h1>
                    <li><strong>Scientific Name:</strong> {this.state.scientific_name}</li>
                    <li><strong>Endangered Level:</strong> {this.state.endangered_level}</li>
                    <li><a href={this.state.url} className="no-underline hover:underline ... text-blue-500" target="_blank" rel="noopener noreferrer"><strong>More Information</strong></a></li>
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

export default connect(mapStateToProps, { saveSpecies })(Species);