import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSavedAnimals } from '../redux/actions/animalActions'
import { removeAnimal } from '../redux/actions/animalActions'
import  AnimalCard  from '../presentationalComponents/AnimalCard'

class Dashboard extends Component {

    componentDidMount() { 
        this.props.fetchSavedAnimals(this.props.user.id);
    }

    render() {
        return (
            <div>
                <h1 className="m-3"><strong>Welcome {this.props.user.first_name}</strong></h1>
                <h2 className="m-3">Here are your saved species...</h2>
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