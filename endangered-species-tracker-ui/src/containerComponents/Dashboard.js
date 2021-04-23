import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSavedSpecies } from '../redux/actions/speciesActions'
import { removeSpecies } from '../redux/actions/speciesActions'
import  SpeciesCard  from '../presentationalComponents/SpeciesCard'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    componentDidMount() { 
        this.props.fetchSavedSpecies(this.props.user.id);
    }

    render() {
        const speciesCards = [...this.props.speciesCards]
        return (
            this.props.loggedIn ?
            <div>
                <h1 className="m-3"><strong>Welcome {this.props.user.first_name}</strong></h1>
                <h2 className="m-3">Here are your saved species...</h2>
                <div className="h-48 flex flex-wrap content-start ...">
                    {speciesCards.sort((a, b) => a.common_name.localeCompare(b.common_name)).map(speciesCard => {
                        return <SpeciesCard key={speciesCard.id} species={speciesCard} remove={this.props.removeSpecies}/>
                    })} 
                </div>    
            </div> :
            <Redirect to="/login"/>
        ); 
    } 
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
        loggedIn: state.auth.loggedIn,
        speciesCards: state.species.speciesCards,
        loading: state.species.loading
    }
}

export default connect(mapStateToProps, {fetchSavedSpecies, removeSpecies})(Dashboard);