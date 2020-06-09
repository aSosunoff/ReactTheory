import React from 'react';
import { connect } from 'react-redux';
import Counter2 from '../Counter2/';

class Counter extends React.Component {
	/* state = {
		count: 0,
	}; */

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
		console.log(this.props);

		return (
			<>
				<h2>Counter {this.props.counter}</h2>
				<Counter2 />
				<button onClick={this.plus}>+</button>
				<button onClick={this.minus}>-</button>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counter,
	};
};

export default connect(mapStateToProps)(Counter);