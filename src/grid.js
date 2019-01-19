import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

class Count extends React.Component {
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

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing.unit * 5,
		textAlign: "center",
		color: theme.palette.text.secondary
	}
});

function FullWidthGrid(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={6} sm={3}>
					<Count speed={30} countLimit={100} />
				</Grid>
				<Grid item xs={6} sm={3}>
					<Count speed={20} countLimit={100} />
				</Grid>
				<Grid item xs={6} sm={3}>
					<Count speed={50} countLimit={100} />
				</Grid>
				<Grid item xs={6} sm={3}>
					<Count speed={10} countLimit={100} />
				</Grid>
			</Grid>
		</div>
	);
}

FullWidthGrid.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
