import React from 'react'
import { connect } from 'react-redux'

const Dashboard = ({ user }) => {
    return <h1>Welcome {user.first_name}</h1>;
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(Dashboard);