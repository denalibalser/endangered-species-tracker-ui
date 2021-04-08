import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllAnimals } from '../redux/actions/animalActions'
import Animal from './Animal'

class AnimalsContainer extends Component {

    render() { 
        if(this.props.loading === true){
            return(
                <div>
                    <h1>Loading Endangered Animals...</h1>
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.animals.map(animal => <Animal key={animal[5]} animal={animal}/>)} 
                </div> 
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        animals: state.animals.endangeredAnimals,
        loading: state.animals.loading
    }
}

export default connect(mapStateToProps, { fetchAllAnimals })(AnimalsContainer);
