import React, { Component } from 'react'
import SearchPage from './SearchPage'
import { connect } from 'react-redux'
// import { fetchAllAnimals } from '../redux/actions/animalActions'


class Home extends Component { 

    // componentDidMount() {
    //     this.props.fetchAllAnimals();
    // }

    render() {
        if(this.props.loggedIn === false) {
            return (
                <div>
                    <h1 className="m-3"><strong>Home</strong></h1>
                    <h2 className="m-3 text-green-700 text-lg">
                        Welcome to Endangered Species Tracker. A web application aimed at 
                        increasing awareness of endangered species and allowing users to save species to their profile in 
                        order to track their endangered status and learn more about the species. To access the functionality 
                        of this application either signup or login! 
                    </h2>
                    <img className="mt-9 mb-9 ml-12 mr-12" src="https://tr-images.condecdn.net/image/E5jRGaPoy27/crop/2040/f/end.jpg" alt="Collage of Endangered Species" width="800" height="800"></img>
                </div> 
            )
        } else {
            return ( 
                <div>
                    <h1 className="m-3"><strong>Home</strong></h1>
                   
                    <SearchPage/>
                </div>
            )
        }
    } 
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(Home);
//