import { v4 as uuidv4 } from 'uuid';

export const fetchAllAnimals = () => {
    return dispatch => {
        dispatch({type: 'LOADING_ANIMALS'})
        fetch(`https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export`) 
        .then(resp => resp.json())
         .then(respJSON => 
            dispatch({
                type: 'FETCH_ALL_ANIMALS', 
                payload: {animal: respJSON.data.map(animal => animal.concat(uuidv4()))}
            })
        )
    }
}

export const saveAnimal = (animal) => { 
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/animal_cards`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
               animal_card: animal
            })
        })
        .then(resp => resp.json())
        .then(respJSON => {
            dispatch({
            type: 'SAVE_ANIMAL',
            payload: { animalCard: respJSON.animal_card },
        })
        })
        

    }
}

export const fetchSavedAnimals = (currentUserId) => { 
    return dispatch => {
        dispatch({type: 'LOADING_ANIMALS'})
        fetch(`http://localhost:3001/api/v1/animal_cards`)
        .then(resp => resp.json())
        .then(respJSON => { 
            dispatch({
            type: 'FETCH_SAVED_ANIMALS',
            payload: {animalCard: respJSON.map(animal_card => animal_card), currentUserId: currentUserId} 
        })
        })
    }
}

export const removeAnimal = (id) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/animal_cards/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }}).then(resp => resp.json())
            .then(respJSON => {
                dispatch({
                    type: 'REMOVE_ANIMAL',
                    payload: {animalCard: respJSON.animal_card}
                })
            }) 
            
    
        }

        
    
}

