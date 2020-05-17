import React from 'react';

export default class extends React.Component {
	state = {
		count: 0,
	};

	plus = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	minus = () => {
		this.setState({
			count: this.state.count - 1,
		});
	};

	addCounter = () => {};

	render() {
		return (
			<>
				<h2>Counter {this.state.count}</h2>
				<button onClick={this.plus}>+</button>
				<button onClick={this.minus}>-</button>
			</>
		);
	}
}
