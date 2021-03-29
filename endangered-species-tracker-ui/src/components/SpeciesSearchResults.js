import React from 'react'
import Animal from './Animal'

const SpeciesSearchResults = ({ results=[] }) => {
    
        return (
            <>
                { results.map((data) => {
                    if (data) {
                        return (
                            <Animal key={data.id} animal={data}/>
    	                )	
    	            }
                    return null
                }) 
                }
            </>
        )
    }


export default SpeciesSearchResults;