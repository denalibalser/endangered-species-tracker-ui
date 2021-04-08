import React from 'react'
import Animal from '../containerComponents/Animal'

const SpeciesSearchResults = ({ results=[] }) => {
    
        return (
            <div className="h-48 flex flex-wrap content-start ...">
                { results.map((data) => {
                    if (data) {
                        return (
                            <Animal key={data[5]} animal={data}/>
    	                )	
    	            }
                    return null
                }) 
                }
            </div>
        )
    }


export default SpeciesSearchResults;