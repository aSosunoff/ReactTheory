import React from 'react';
import { connect } from 'react-redux';
import Counter2 from '../Counter2/';
import { add, sub, addNumber } from '../redux/actions/actions';

class Counter extends React.Component {
	/* state = {
		count: 0,
	}; */

	/* plus = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
	}; */

	/* minus = () => {
		this.setState((prevState) => {
            return {
                count: this.state.count - 1,
            }
        });
	}; */

	addCounter = () => {};

	render() {
		return (
			<>
				<h2>Counter {this.props.counter}</h2>
				<Counter2 />
				<button onClick={this.props.onAdd}>+</button>
				<button onClick={this.props.onSub}>-</button>
				<button onClick={() => this.props.onAddNumber(15)}>+ 15</button>
				<button onClick={() => this.props.onAddNumber(-15)}>- 15</button>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counter1.counter,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAdd: () => dispatch(add()),
		onSub: () => dispatch(sub()),
		onAddNumber: number => dispatch(addNumber(number)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
