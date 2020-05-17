import React from 'react';
import Counter2 from '../Counter2/';

export default class extends React.Component {
	state = {
		count: 0,
	};

	plus = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
	};

	minus = () => {
		this.setState((prevState) => {
            return {
                count: this.state.count - 1,
            }
        });
	};

	addCounter = () => {};

	render() {
		return (
			<>
				<h2>Counter {this.state.count}</h2>
				<Counter2 />
				<button onClick={this.plus}>+</button>
				<button onClick={this.minus}>-</button>
			</>
		);
	}
}
