import React, { useState } from 'react'
import Details from './Details'

function Tiles({ key, name, specialty, greased, image, weight, medal, hog }) {
    const [wasClicked, setAsWasClicked] = useState(false)
    
    function handleClick(id) {
        if (id)
            setAsWasClicked((wasClicked => !wasClicked))
    }

    return (
        <div className="ui four wide column" >
            <div className="ui card" key={name}>
                <p id={name} onClick={(e) => handleClick(e.target.id)} className="smallHeader">Name: {name}</p>
                <img onClick={(e) => handleClick(e.target.alt)} className="image img" alt={name} src={image}></img>
                {wasClicked ? <Details specialty={specialty} greased={String(greased)} weight={weight} medal={medal} /> : ""}
            </div>
        </div>
    )
}

export default Tiles
