import React from 'react';
import './index.css';

export default ({
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

	return (
		<div className="car">
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
