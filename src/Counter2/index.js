import React from 'react';
import { ClickedContext } from '../App';

export default props => {
	return (
		<>
			<h3>Counter 2</h3>
			<ClickedContext.Consumer>
				{clicked => clicked ? <p>Показываю</p> : null}
			</ClickedContext.Consumer>
		</>
	)
}
