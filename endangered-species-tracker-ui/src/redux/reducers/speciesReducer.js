export default function speciesReducer(state = {
    loading: false,
    endangeredSpecies: [],
    speciesCards: []         
}, action) {
    switch(action.type) { 
        case 'LOADING_SPECIES':
            return {
                ...state, 
                endangeredSpecies: [...state.endangeredSpecies], 
                speciesCards: [...state.speciesCards],
                loading: true
            }
        case 'FETCH_ALL_SPECIES': 
               return {
                ...state, 
                endangeredSpecies: action.payload.species, 
                speciesCards: [...state.speciesCards],
                loading: false
            }

        case 'SAVE_SPECIES':
            return {
                ...state, 
                endangeredSpecies: [...state.endangeredSpecies],
                speciesCards: [...state.speciesCards.concat(action.payload.speciesCard)], 
                loading: false
            }

        case 'FETCH_SAVED_SPECIES':
            return  {
                ...state, 
                endangeredSpecies: [...state.endangeredSpecies],
                speciesCards: action.payload.speciesCard,
                loading: false
            }
        
        case 'REMOVE_SPECIES':
            return {
                ...state, 
                endangeredSpecies: [...state.endangeredSpecies],
                speciesCards: state.speciesCards.filter(speciesCard => speciesCard.id !== action.payload.speciesCard.id),
                loading: false
            }
           
        default: 
        return state;
    }
    
}
