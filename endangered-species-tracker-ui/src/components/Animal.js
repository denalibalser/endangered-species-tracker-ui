import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveAnimal } from '../redux/actions/animalActions'

class Animal extends Component {

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
        console.log(this.props.history)
        this.props.saveAnimal(this.state);
    }


    render() {
        return (
            <div className="animal-card">
                <h1>{this.props.animal[0]}</h1>
                <li><strong>Scientific Name:</strong> {this.props.animal[1].value}</li>
                <li><strong>Endangered Level:</strong> {this.props.animal[2]}</li>
                <li><a href={this.props.animal[1].url} target="_blank" rel="noopener noreferrer"><strong>More Information</strong></a></li>
                <button onClick={this.handleOnClick}>Save Animal To Dashboard</button>
            </div>
        )
    }  
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { saveAnimal })(Animal);