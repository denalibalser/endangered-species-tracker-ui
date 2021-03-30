import React from 'react'

const AnimalCard = (props) => {

    const handleOnClick = () => {
        props.remove(props.animal.id)
    }

    return (
        <div>
            <ul>
                <h2>{props.animal.common_name}</h2>
                <li><strong>Scientific Name:</strong> {props.animal.scientific_name}</li>
                <li><strong>Endangered Level:</strong> {props.animal.endangered_level}</li>
                <li><a href={props.animal.url} target="_blank" rel="noopener noreferrer"><strong>More Information</strong></a></li>
                <button onClick={handleOnClick}>Remove Species</button>  
            </ul>
            
        </div>
    )
}


export default AnimalCard;