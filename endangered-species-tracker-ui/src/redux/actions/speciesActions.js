import { v4 as uuidv4 } from 'uuid';
const baseURL = 'http://localhost:3001/api/v1/animal_cards'

export const fetchAllSpecies = () => {
    return dispatch => {
        dispatch({type: 'LOADING_SPECIES'})
        fetch(`https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export`) 
        .then(resp => resp.json())
         .then(respJSON => 
            dispatch({
                type: 'FETCH_ALL_SPECIES', 
                payload: {species: respJSON.data.map(species => species.concat(uuidv4()))}
            })
        )
    }
}

export const saveSpecies = (species) => { 
    return dispatch => {
        fetch(`${baseURL}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
               animal_card: species
            })
        })
        .then(resp => resp.json())
        .then(respJSON => {
            dispatch({
                type: 'SAVE_SPECIES',
                payload: { speciesCard: respJSON.species_card },
            })
        })
        

    }
}

export const fetchSavedSpecies = (currentUserId) => { 
    return dispatch => {
        dispatch({type: 'LOADING_SPECIES'})
        fetch(`http://localhost:3001/api/v1/users/${currentUserId}`)
        .then(resp => resp.json())
        .then(respJSON =>  {
            dispatch({
                type: 'FETCH_SAVED_SPECIES',
                payload: {speciesCard: respJSON.species_cards.map(species_card => species_card), currentUserId: currentUserId} 
            })
        })
    }
}

export const removeSpecies = (id) => {
    return dispatch => {
        fetch(`${baseURL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(respJSON => {
            dispatch({
                type: 'REMOVE_SPECIES',
                payload: {speciesCard: respJSON.species_card}
            })
        }) 
    }  
}

