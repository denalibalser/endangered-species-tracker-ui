import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllAnimals } from '../redux/actions/animalActions'
import Animal from './Animal'

class AnimalsContainer extends Component {

    handleOnClick = () => {
        this.props.fetchAllAnimals();

    }

    render() {
        return (
           <div>
               AnimalsContainer
               <br/>
               <button onClick={this.handleOnClick}>Fetch Animals</button>
               {this.props.animals.map(animal => <Animal key={animal[1].url} animal={animal} loading={this.props.loading}/>)} 

             
           </div> 
           
           
        )
    }
}

const mapStateToProps = state => {
    return {
        animals: state.animals.endangered_animals,
        loading: state.animals.loading
    }
}

export default connect(mapStateToProps, { fetchAllAnimals })(AnimalsContainer);
