// import { StaticRouter } from "react-router-dom";

export default (state = {
    loading: false,
    endangered_animals: [],
    animal_cards: []       
        
}, action) => {
    
    switch(action.type) { 
        case 'LOADING_ANIMALS':
            return {
                ...state, 
                endangered_animals: [...state.endangered_animals], 
                loading: true
            }
        case 'FETCH_ALL_ANIMALS': 
              return {
                ...state, 
                endangered_animals: action.payload.animal, 
                loading: false
            }

        case 'SAVE_ANIMAL':
            return {
                ...state, 
                endangered_animals: [...state.endangered_animals],
                animal_cards: action.payload.animalCard
            }

        case 'FETCH_SAVED_ANIMALS':
            return {
                ...state, 
                endangered_animals: [...state.endangered_animals],
                animal_cards: [...state.animal_cards]
            }

        default: 
        return state;
    }
    
}
