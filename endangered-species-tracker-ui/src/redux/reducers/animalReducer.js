export default (state = {
    loading: false,
    endangered_animals: []       
        
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
    
        
            
            
            

        default: 
        return state;
    }
    
}
