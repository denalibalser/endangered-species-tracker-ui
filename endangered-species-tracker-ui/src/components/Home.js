import React, { Component } from 'react'
// import AnimalsContainer from './AnimalsContainer'
import SearchPage from './SearchPage'
// import { connect } from 'react-redux'
// import { fetchAllAnimals } from '../redux/actions/animalActions'


class Home extends Component { //return to functional component??

    // componentDidMount() {
    //     this.props.fetchAllAnimals();
    // }

    render() {
        
        return ( 
            <div>
                <h1 className="m-3">Home</h1>
                {/* need a search-bar component - which will then render AnimalsContainer component that renders the Animal components for the animals that match the search */}
                {/* <AnimalsContainer /> */}

                <SearchPage/>

            </div>
            
        )
    }
    
}

export default Home;
//connect(null, { fetchAllAnimals })(Home);