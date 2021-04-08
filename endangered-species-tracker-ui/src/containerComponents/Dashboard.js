import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSavedSpecies } from '../redux/actions/speciesActions'
import { removeSpecies } from '../redux/actions/speciesActions'
import  SpeciesCard  from '../presentationalComponents/SpeciesCard'

class Dashboard extends Component {

    componentDidMount() { 
        this.props.fetchSavedSpecies(this.props.user.id);
    }

    render() {
        return (
            <div>
                <h1 className="m-3"><strong>Welcome {this.props.user.first_name}</strong></h1>
                <h2 className="m-3">Here are your saved species...</h2>
                    <div className="h-48 flex flex-wrap content-start ...">
                        {this.props.userSpeciesCards.map(speciesCard => {
                            if(speciesCard.user.id === this.props.user.id) {
                                return <SpeciesCard key={speciesCard.id} animal={speciesCard} remove={this.props.removeSpecies}/>
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
        userSpeciesCards: state.species.speciesCards,
        loading: state.species.loading
    }
}

export default connect(mapStateToProps, {fetchSavedSpecies, removeSpecies})(Dashboard);