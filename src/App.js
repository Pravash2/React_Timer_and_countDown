import React, { Component } from "react";
import "./App.css";
import Timer from "./Timer";
import Count from "./count";
import Grid from "./grid";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Grid />
					{/* <p>This will count till 100 with speed 50 milisecond</p>
					<Count speed={50} countLimit={100} />
					{/* <p>You are on WebSite</p>
					<br />
					<Timer />
					<p>Seconds</p> */}
				</header>
			</div>
		);
	}
}

export default App;
