import React, { Component } from "react";

export default class count extends Component {
	constructor(props) {
		super(props);

		this.state = {
			time: 0
		};
		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this.timer = setInterval(this.tick, this.props.speed);
	}

	tick() {
		const time = this.props.countLimit;
		this.setState({
			time: this.state.time < time ? this.state.time + 1 : time
		});
	}

	render() {
		return <span id="countTime">{this.state.time}</span>;
	}
}
