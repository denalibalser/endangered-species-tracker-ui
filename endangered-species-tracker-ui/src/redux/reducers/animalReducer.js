// import { StaticRouter } from "react-router-dom";

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
                animalCards: action.payload.animalCard,
                loading: false
            }

        case 'FETCH_SAVED_ANIMALS':
            //return console.log(action.payload)
            //action.payload.animalCard.map(animal =>{if(animal.user_id === action.payload.currentUserId){
                return  {
                    ...state, 
                    endangeredAnimals: [...state.endangeredAnimals],
                    animalCards: action.payload.animalCard,
                    loading: false
                }
             //else{
            //     return {
            //         ...state, 
            //         endangered_animals: [...state.endangered_animals],
            //         animal_cards: [...state.animal_cards],
            //         loading: false
            //     }
            // }})
            // if(action.payload.animal_card.user_id === action.payload.current_user_id) {
            //     return {
            //         ...state, 
            //         endangered_animals: [...state.endangered_animals],
            //         animal_cards: [...state.animal_cards.concat(action.payload.animal_card)], //action.payload.animal_card,//
            //         loading: false
            //     } 
            // } else {
            //     return {
            //         ...state, 
            //         endangered_animals: [...state.endangered_animals],
            //         animal_cards: [...state.animal_cards],
            //         loading: false
            //     }
            // }
             

        default: 
        return state;
    }
    
}
