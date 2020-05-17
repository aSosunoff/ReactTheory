import React from 'react';
import classes from './App.module.css';
import Car from './Car/';
import ErrorBoundary from './ErrorBoundary/';

class App extends React.Component {
	constructor(props) {
		console.log('App constructor');
		super(props);

		this.state = {
			pageTitle: props.title,
			cars: [
				{ name: 'Ford Focuse', year: 2010 },
				{ name: 'Mazda', year: 2015 },
				{ name: 'Ferrari', year: 2030 },
			],
			showCars: false,
			buttonShowCarsTitle: 'Показать',
		};
	}

	toggleCarsHandler = () => {
		this.setState({
			showCars: !this.state.showCars,
			buttonShowCarsTitle: this.state.showCars ? 'Показать' : 'Спрятать',
		});
	};

	changeTitleHandler = pageTitle => {
		this.setState({ pageTitle });
	};

	deleteHandler = inx => {
		const cars = [...this.state.cars];
		cars.splice(inx, 1);
		this.setState({
			cars,
		});
	};

	changeInputTitleHandler = (inx, title) => {
		const cars = [...this.state.cars];
		cars[inx] = { ...this.state.cars[inx], name: title };
		this.setState({
			cars,
		});
	};

	UNSAFE_componentWillMount() {
		console.log('App componentWillMount');
	}

	componentDidMount() {
		console.log('App componentDidMount');
	}

	render() {
		console.log('App render');

		let cars = null;

		if (this.state.showCars) {
			cars = this.state.cars.map(({ name, year }, inx) => {
				return (
					<ErrorBoundary key={inx}>
						<Car
							name={name}
							year={year}
							onChangeTitle={this.changeTitleHandler}
							onDelete={this.deleteHandler.bind(this, inx)}
							onChangeInputTitle={({ target: { value } }) =>
								this.changeInputTitleHandler(inx, value)
							}
						/>
					</ErrorBoundary>
				);
			});
		}

		return (
			<div className={classes.app}>
				<h1>{this.state.pageTitle}</h1>

				<p>
					<button onClick={this.toggleCarsHandler}>{this.state.buttonShowCarsTitle}</button>
				</p>

				<div className={classes['car-list']}>{cars}</div>
			</div>
		);
	}
}

export default App;
