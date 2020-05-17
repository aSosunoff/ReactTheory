import React from 'react';
import classes from './index.module.css';
// import Radium from 'radium';
import withClass from '../hoc/withClass'

class Car extends React.Component {
	/* static getDerivedStateFromProps(nextProps, prevState) {
		console.log('Car getDerivedStateFromProps', nextProps, prevState);
		return prevState;
	} */

	/* getSnapshotBeforeUpdate() {
		console.log('Car getSnapshotBeforeUpdate');
		return true;
	} */

	/* UNSAFE_componentWillReceiveProps(nextProps){
		console.log('Car UNSAFE_componentWillReceiveProps', nextProps);
	} */

	/* shouldComponentUpdate(nextProps, nextState) {
		console.log('Car shouldComponentUpdate', nextProps, nextState);
		return true;
	} */

	/* UNSAFE_componentWillUpdate(nextProps, nextState) {
		console.log('Car UNSAFE_componentWillUpdate', nextProps, nextState);
	} */

	/* componentDidUpdate() {
		console.log('Car componentDidUpdate');
	} */

	/* componentWillUnmount() {
		console.log('Car componentWillUnmount');
	} */

	render() {
		/* console.log('Car render'); */

		const classInput = [classes.input];

		if (this.props.name.length > 0 && this.props.name.length <= 10) {
			classInput.push(classes.green);
		}

		if (this.props.name.length > 10) {
			classInput.push(classes.red);
		}

		return (
			<>
				<h3>Car name: {this.props.name}</h3>
				<p>Year: {this.props.year}</p>
				<button onClick={this.props.onChangeTitle.bind(this, this.props.name)}>Click</button>
				<button onClick={this.props.onDelete}>Удалить</button>
				<p>
					<input
						className={classInput.join(' ')}
						type="text"
						onChange={this.props.onChangeInputTitle}
						value={this.props.name}
					/>
				</p>
			</>
		);
	}
}

// export default Radium(Car);
export default withClass(Car, classes.car);
