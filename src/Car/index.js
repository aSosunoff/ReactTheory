import React from 'react';
import './index.css';
import Radium from 'radium';

const Car = ({
	data: { name, year },
	onChangeTitle = () => {},
	onDelete = () => {},
	onChangeInputTitle = () => {},
} = {}) => {
	const classInput = ['input'];

	if (name.length > 0 && name.length <= 10) {
		classInput.push('green');
	} 
	
	if (name.length > 10) {
		classInput.push('red');
	}

	const style = {
		':hover': {
			border: '1px solid rgb(141, 141, 141)',
			boxShadow: '3px 4px 6px rgb(141, 141, 141)',
			cursor: 'pointer',
		}
	}

	return (
		<div className="car" style={style}>
			<h3>Car name: {name}</h3>
			<p>Year: {year}</p>
			<button onClick={onChangeTitle.bind(this, name)}>Click</button>
			<button onClick={onDelete}>Удалить</button>
			<p>
				<input
					className={classInput.join(' ')}
					type="text"
					onChange={onChangeInputTitle}
					value={name}
				/>
			</p>
		</div>
	);
};

export default Radium(Car);
