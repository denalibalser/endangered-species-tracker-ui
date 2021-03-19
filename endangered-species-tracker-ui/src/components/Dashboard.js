import React from 'react'
import { connect } from 'react-redux'

const Dashboard = props => {
    return <h1>Welcome {props.username}</h1>;
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username
    }
}

export default connect(mapStateToProps)(Dashboard);