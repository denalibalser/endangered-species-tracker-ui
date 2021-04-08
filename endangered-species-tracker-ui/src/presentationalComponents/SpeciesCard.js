import React from 'react'

const SpeciesCard = (props) => {

    const handleOnClick = () => {
        props.remove(props.animal.id)
    }

    return (
        <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
            <ul>
                <h1>{props.animal.common_name}</h1>
                <li><strong>Scientific Name:</strong> {props.animal.scientific_name}</li>
                <li><strong>Endangered Level:</strong> {props.animal.endangered_level}</li>
                <li><a href={props.animal.url} className="no-underline hover:underline ... text-blue-500" target="_blank" rel="noopener noreferrer"><strong>More Information</strong></a></li>
                <button className="btn" onClick={handleOnClick}>Remove Species</button>  
            </ul>
            
        </div>
    )
}

export default SpeciesCard;