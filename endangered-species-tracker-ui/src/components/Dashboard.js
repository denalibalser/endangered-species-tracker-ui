import React, { Component } from 'react'
//import { render } from 'react-dom'
import { connect } from 'react-redux'
import { fetchSavedAnimals } from '../redux/actions/animalActions'



class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchSavedAnimals();
    }


    render() {
        return (
            <div>
                <h1>Welcome {this.props.user.first_name}</h1>
                {/* want to iterate through this.props.userAnimalCards and render AnimalCard component for each */}
            </div> 
        );
    }
    
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
        userAnimalCards: state.animals.animal_cards //do i need this???
    }
}

export default connect(mapStateToProps, {fetchSavedAnimals})(Dashboard);