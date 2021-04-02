import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSavedAnimals } from '../redux/actions/animalActions'
import { removeAnimal } from '../redux/actions/animalActions'
import  AnimalCard  from './AnimalCard'

class Dashboard extends Component {

    componentDidMount() { //need to have fetchSavedAnimals called after new save animal 
        this.props.fetchSavedAnimals(this.props.user.id);
    }

    render() {
        // {this.props.fetchSavedAnimals(this.props.user.id)}
        return (
            <div>
                <h1 className="m-3">Welcome {this.props.user.first_name}</h1>
                    <div className="h-48 flex flex-wrap content-start ...">
                        {this.props.userAnimalCards.map(animalCard => {
                            if(animalCard.user.id === this.props.user.id) {
                                return <AnimalCard key={animalCard.id} animal={animalCard} remove={this.props.removeAnimal}/>
                            }
                        })} 
                    </div>    
            </div> 
        ); 
    } 
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
        userAnimalCards: state.animals.animalCards,
        loading: state.animals.loading
    }
}

export default connect(mapStateToProps, {fetchSavedAnimals, removeAnimal})(Dashboard);