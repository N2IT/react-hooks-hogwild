import React from 'react'
import Tiles from './Tiles'

function TileList({ hogs, showGreased, setShowGreased }) {
 const filteredHogs = hogs.filter((hog) => hog.greased === showGreased)
    // console.log(filteredHogs)
    return (
        <div className="ui grid container">
            {filteredHogs.map((hog) => {
                // console.log(hog.greased)
                return(
                <Tiles 
                key={hog.name}
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                image={hog.image}
                weight={hog.weight}
                medal={hog['highest medal achieved']}/>
            )})}

        </div>

    )
}

export default TileList