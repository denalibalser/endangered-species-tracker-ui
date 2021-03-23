import React, { Component } from 'react'
//import { render } from 'react-dom'
import { connect } from 'react-redux'
import AnimalsContainer from './AnimalsContainer'



class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.user.first_name}</h1>
                <AnimalsContainer/>
            </div> 
        );
    }
    
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(Dashboard);