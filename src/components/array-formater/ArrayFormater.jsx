import React from 'react'
import './ArrayFormater.css'

function ArrayFormater({ stringArray}) {
    return (
        <ol className="list">
            {stringArray.map((element, index) => <li key={index}>{element}</li>)}
        </ol>
    )
}

export default ArrayFormater
