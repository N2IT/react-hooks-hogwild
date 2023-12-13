import React from "react";
import piggy from "../assets/porco.png";


const Nav = ({ showGreased, setShowGreased, toggleSort }) => {

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
				<label class="switch">
					Gimme the Greased Piggies
					<input
						checked={showGreased}
						type="checkbox"
						onChange={e => setShowGreased(e.target.checked)} />
				</label>
                <button onClick={() => toggleSort('name')}>Sort by Name</button>
                <button onClick={() => toggleSort('weight')}>Sort by Weight</button>
			</div>
		</div>
	);
};

export default Nav;
