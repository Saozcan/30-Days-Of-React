import React, { useState, useEffect} from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'











const App = (props) => {

	const [counter, setCounter] = useState(0)

useEffect(() => {
	getData();
}, [])

const getData = async () => {
	const url = 'https://api.thecatapi.com/v1/breeds';
	try {
		const response = await axios.get(url);
		const data = await response.data;
		console.log(data);
	}
	catch (error) {
		console.log(error);
	}
}

const handleClick = () => {
	setCounter(counter + 1);
}

	return (
		<div className='App'>
			<button onClick={handleClick}>Hello</button>
			<span>{counter}</span>
		</div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);