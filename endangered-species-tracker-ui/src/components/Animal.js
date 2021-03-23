import React from 'react'

const Animal = (props) => {
    
    return (
        <div>
            <h1>{props.animal[0]}</h1>
            <li><strong>Scientific Name:</strong> {props.animal[1].value}</li>
            <li><strong>Endangered Level:</strong> {props.animal[2]}</li>
            <li><a href={props.animal[1].url} target="_blank" rel="noopener noreferrer"><strong>More Information</strong></a></li>
        </div>
    )
    
}

export default Animal;