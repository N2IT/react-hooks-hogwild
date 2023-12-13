import React, {useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList"

import hogs from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState('name')
    const [sortOrder, setSortOrder] = useState('asc')

	const toggleSort = (criteria) => {
        if (criteria === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(criteria);
            setSortOrder('asc');
        }
    };
		
	return (
		<div className="App">
			<Nav
			toggleSort={toggleSort}
			hogs={hogs} 
			showGreased={showGreased} 
			setShowGreased={setShowGreased}
			 />
			<TileList sortBy={sortBy} setSortBy={setSortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} showGreased={showGreased} hogs={hogs} />
		</div>
	);
}

export default App;
