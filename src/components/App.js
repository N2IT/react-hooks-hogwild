import React, {useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList"

import hogs from "../porkers_data";

function App() {
	const [ showGreased, setShowGreased ] = useState(false)
		
	return (
		<div className="App">
			<Nav showGreased={showGreased} setShowGreased={setShowGreased} />
			<TileList showGreased={showGreased} hogs={hogs} />
		</div>
	);
}

export default App;
