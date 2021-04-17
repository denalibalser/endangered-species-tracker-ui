const baseURL = 'http://localhost:3001/api/v1'

export const signup = (user, history) => { 
    return dispatch => {
        fetch(`${baseURL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.error || data.logged_in === false) {
                dispatch({
                    type: 'AUTH_FAILURE',
                    payload: { loggedIn: data.logged_in, error: data.error }
                })
            } else {
                dispatch({
                    type: 'AUTH_SUCCESS',
                    payload: { loggedIn: data.logged_in, currentUser: data.user },
                });
                history.push(`/dashboard`) 
            }
        });
    };
};

export const login = (user, history) => { 
    return dispatch => {
        fetch(`${baseURL}/sessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.logged_in === false) { 
                dispatch({
                    type: 'AUTH_FAILURE',
                    payload: { loggedIn: data.logged_in, error: data.error }
                })
            } else {
                dispatch({
                    type: 'AUTH_SUCCESS',
                    payload: { loggedIn: data.logged_in, currentUser: data.user },
                });
                history.push(`/dashboard`) 
            } 
        });
    };
};

export const checkLoggedIn = (callback) => {
    return dispatch => {
        fetch(`${baseURL}/logged_in`, {
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
        fetch(`${baseURL}/logout`, {
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

