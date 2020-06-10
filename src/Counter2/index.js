import React from 'react';
import { connect } from 'react-redux';
import { ClickedContext } from '../App';
import { add2 } from '../redux/actions/actions';

class Counter2 extends React.Component {
	render() {
		return (
			<>
				<h3>Counter 2</h3>
				<button onClick={() => this.props.onAdd2(30)}>+30</button>
				<ClickedContext.Consumer>
					{clicked => (clicked ? <p>Показываю {this.props.counter}</p> : null)}
				</ClickedContext.Consumer>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counter2.counter,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAdd2: number => dispatch(add2(number)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
