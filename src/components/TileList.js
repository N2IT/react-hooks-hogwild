import React, { useState } from 'react'
import Tiles from './Tiles'

function TileList({ hogs, showGreased, sortBy, sortOrder }) {
    
    const filteredHogs = hogs
        .filter((hog) => hog.greased === showGreased || hog.greased)
        .sort((a, b) => {
            if (sortBy === 'name') {
                return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else if (sortBy === 'weight') {
                return sortOrder === 'asc' ? a.weight - b.weight : b.weight - a.weight;
            }
            return 0;
        });

    return (

        <div className="ui grid container">
            
            {filteredHogs.map((hog) => {
                return (
                    <Tiles
                        hog={hog}
                        key={hog.name}
                        name={hog.name}
                        specialty={hog.specialty}
                        greased={hog.greased}
                        image={hog.image}
                        weight={hog.weight}
                        medal={hog['highest medal achieved']} />
                )
            })}

        </div>

    )
}

export default TileList