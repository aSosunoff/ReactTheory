import React from 'react';
import classes from './index.module.css';
// import Radium from 'radium';

class Car extends React.Component {
	/* static getDerivedStateFromProps(nextProps, prevState) {
		console.log('Car getDerivedStateFromProps', nextProps, prevState);
		return prevState;
	} */

	getSnapshotBeforeUpdate() {
		console.log('Car getSnapshotBeforeUpdate');
		return true;
	}

	/* UNSAFE_componentWillReceiveProps(nextProps){
		console.log('Car UNSAFE_componentWillReceiveProps', nextProps);
	} */

	shouldComponentUpdate(nextProps, nextState) {
		console.log('Car shouldComponentUpdate', nextProps, nextState);
		return true;
	}

	/* UNSAFE_componentWillUpdate(nextProps, nextState) {
		console.log('Car UNSAFE_componentWillUpdate', nextProps, nextState);
	} */

	componentDidUpdate() {
		console.log('Car componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('Car componentWillUnmount');
	}

	render() {
		if (this.props.name === "Ford Focuse") {
			throw new Error("Ошибка");
		}
		
		console.log('Car render');

		const classInput = [classes.input];

		if (this.props.name.length > 0 && this.props.name.length <= 10) {
			classInput.push(classes.green);
		}

		if (this.props.name.length > 10) {
			classInput.push(classes.red);
		}

		const style = {
			':hover': {
				border: '1px solid rgb(141, 141, 141)',
				boxShadow: '3px 4px 6px rgb(141, 141, 141)',
				cursor: 'pointer',
			},
		};

		return (
			<div className={classes.car} style={style}>
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
			</div>
		);
	}
}

// export default Radium(Car);
export default Car;
