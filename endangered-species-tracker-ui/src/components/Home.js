import React, { Component } from 'react'
import AnimalsContainer from './AnimalsContainer'


class Home extends Component { //return to functional component??
    render() {
        return ( 
            <div>
                <h1>Home</h1>
                <AnimalsContainer />
            </div>
            
        )
    }
    
}

export default Home;