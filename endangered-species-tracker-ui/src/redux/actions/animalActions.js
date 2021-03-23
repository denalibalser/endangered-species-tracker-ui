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

//incorporate loading action for when animals are being fetched 