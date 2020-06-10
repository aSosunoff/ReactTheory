import { ADD, ADD2, ADD_NUMBER, SUB } from './actionTypes';

export const add = () => {
	return { type: ADD };
};

export const sub = () => {
	return { type: SUB };
};

export const addNumber = number => {
	return { type: ADD_NUMBER, payload: number };
};

export const add2 = number => {
	return { type: ADD2, payload: number };
};

export const addAsyncNumber = number => {
	return dispatch => {
		setTimeout(() => {
			dispatch(addNumber(number));
		}, 3000);
	};
};
