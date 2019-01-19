import React, { Component } from "react";

export default class Timer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			timeNow: new Date()
		};
		this.time = this.time.bind(this);
	}

	componentWillMount() {
		this.timer = setInterval(this.time, 1000);
	}

	time() {
		this.setState({ countTime: new Date() - this.state.timeNow });
	}

	render() {
		let times = Math.round(this.state.countTime / 1000);
		times = times ? times : 0;
		return (
			<div>
				<span>{times}</span>
			</div>
		);
	}
}
