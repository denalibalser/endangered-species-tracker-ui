import React from 'react'

const Animal = (props) => {

    // const uniqueAnimals = (props) => {
    //     props.animal[0].filter((x, i, a) => a.indexOf(x) === i)
    // }

    // console.log(uniqueAnimals())
    
    return (
        <div>
            <h1>{props.animal[0]}</h1>
            <li><strong>Scientific Name:</strong> {props.animal[1].value}</li>
            <li><strong>More Information:</strong> {props.animal[1].url}</li>
        </div>
    )
    
}

export default Animal;