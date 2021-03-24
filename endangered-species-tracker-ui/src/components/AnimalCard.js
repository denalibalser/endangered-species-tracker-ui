import React from 'react'
import { Animal } from './Animal'
//want this component to render any Animals that the current_user has saved (to backend)

const AnimalCard = () => {
    return (
        <div>
            <Animal/>
        </div>
    )
}

export default AnimalCard;