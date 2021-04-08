import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveSpecies } from '../redux/actions/speciesActions'
import { fetchSavedSpecies } from '../redux/actions/speciesActions'

class SpeciesContainer extends Component {

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { saveSpecies, fetchSavedSpecies })(SpeciesContainer);