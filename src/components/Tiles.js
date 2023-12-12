import React from 'react'

function Tiles({ name, specialty, greased, image, weight, medal  }) {
    
    return (
        <div className="ui eight wide column" key={name}>
            <p>Name: {name}</p>
            <img alt={name} src={image}></img>
            <p>Weight: {weight}</p>
            <p>Medals Won: {medal}</p>
            <p>Specialties: {specialty}</p>
            <p>Greased: {greased}</p>
        </div>
    )
}

export default Tiles
