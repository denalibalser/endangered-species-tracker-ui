export const signup = (user, history) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'AUTH_SUCCESS',
            payload: {
                loggedIn: data.logged_in,
                currentUser: data.user
            }
        }))
        history.push(`/dashboard`) //now waits to redirect until promise is returned from api and resolved in action
    };
};

export const login = (user, history) => {
    //console.log(user)
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/sessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'AUTH_SUCCESS',
            payload: {
                loggedIn: data.logged_in,
                currentUser: data.user
            }
        }))
        history.push(`/dashboard`) //now waits to redirect until promise is returned from api and resolved in action
    };
};