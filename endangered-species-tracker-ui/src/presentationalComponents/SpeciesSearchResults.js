import React from 'react'
import Species from '../containerComponents/Species'

const SpeciesSearchResults = ({ results=[] }) => {
    
        return (
            <div className="h-48 flex flex-wrap content-start ...">
                { results.map((data) => 
                    {
                        if (data) {
                            return (
                                <Species key={data[5]} species={data}/>
    	                    )	
    	                }
                        return null
                    }) 
                }
            </div>
        )
    }

export default SpeciesSearchResults;