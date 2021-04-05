
export default (state = {
    loading: false,
    endangeredAnimals: [],
    animalCards: []       
        
}, action) => {
    
    switch(action.type) { 
        case 'LOADING_ANIMALS':
            return {
                ...state, 
                endangeredAnimals: [...state.endangeredAnimals], 
                animalCards: [...state.animalCards],
                loading: true
            }
        case 'FETCH_ALL_ANIMALS': 
               return {
                ...state, 
                endangeredAnimals: action.payload.animal, 
                animalCards: [...state.animalCards],
                loading: false
            }

        case 'SAVE_ANIMAL':
            return {
                ...state, 
                endangeredAnimals: [...state.endangeredAnimals],
                animalCards: [...state.animalCards.concat(action.payload.animal_card)], //changed this from action.payload.animal_card
                loading: false
            }

        case 'FETCH_SAVED_ANIMALS':
            return  {
                ...state, 
                endangeredAnimals: [...state.endangeredAnimals],
                animalCards: action.payload.animalCard,
                loading: false
            }
        
        case 'REMOVE_ANIMAL':
            return {
                ...state, 
                endangeredAnimals: [...state.endangeredAnimals],
                animalCards: state.animalCards.filter(animalCard => animalCard.id !== action.payload.animalCard.id),
                loading: false
            }
           

        default: 
        return state;
    }
    
}
