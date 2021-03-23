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
        .then(data => {
            dispatch({
            type: 'AUTH_SUCCESS',
            payload: { loggedIn: data.logged_in, currentUser: data.user },
        });
            history.push(`/dashboard`) //now waits to redirect until promise is returned from api and resolved in action
        });
    };
};

export const login = (user, history) => {
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
        .then(data => {
            dispatch({
            type: 'AUTH_SUCCESS',
            payload: { loggedIn: data.logged_in, currentUser: data.user },
        });
            history.push(`/dashboard`) //now waits to redirect until promise is returned from api and resolved in action
        });
    };
};

export const checkLoggedIn = (callback) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/logged_in`, {
            credentials: 'include'
        })
        .then(resp => resp.json())
        .then(data => 
            {
                dispatch({
                    type: 'AUTH_SUCCESS',
                    payload: {
                        loggedIn: data.logged_in,
                        currentUser: data.user
                    }
                })
                callback();
            }
        )
    }    
}

export const logout = (history) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/logout`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: 'LOGOUT'})
            history.push('/login')
        })  
    }    
}