import React from 'react'
import { useReducer } from 'react';
import ReactDOM from 'react-dom';


const initialState = {
	number1: 1,
	number2: 2,
	number3: 3,
	number4: 4,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'DECREASE':
			return { ...state, number1: 0, number2: 0, number3: 10};
		case 'INCREASE':
			return { ...state, number1: 10, number2: 0, number3: 0};
		default:
			return state;
	}
}

function App() {

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
		<div>
			<p>{state.number1}</p>
			<p>{state.number2}</p>
			<p>{state.number3}</p>
			<p>{state.number4}</p>
		</div>
		<button onClick={() => dispatch({type: 'DECREASE'})}>decrease</button>
		<button onClick={() => dispatch({type: 'INCREASE'})}>increase</button>
		<button></button>
		</>
	)
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);