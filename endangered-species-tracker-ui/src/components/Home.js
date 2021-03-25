import React, { Component } from 'react'
import AnimalsContainer from './AnimalsContainer'


class Home extends Component { //return to functional component??
    render() {
        
        return ( 
            <div>
                <h1>Home</h1>
                {/* need a search-bar component - which will then render AnimalsContainer component that renders the Animal components for the animals that match the search */}
                <AnimalsContainer />
            </div>
            
        )
    }
    
}

export default Home;