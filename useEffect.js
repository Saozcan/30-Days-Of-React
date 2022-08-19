import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = 'bisque';

const App = (props) => {
  const [position, setPosition] = useState(true);

  const onClickChangePosition = () => {
    setPosition(!position);
  };

  return (
    <div className="App">
      {position ? <FunctionComponenet /> : <div />}
      <button onClick={onClickChangePosition}>position</button>
    </div>
  );
}

const FunctionComponenet = () => {
	const [count, setCount] = useState(0);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const myTimer = setInterval(() => {
			setCounter( counter => counter + 1);
		}, 1000)
		return () => clearInterval(myTimer); //before destroy the componenet you have to use it
	}, [count])

	const onClick = () => {
    setCount(count + 1);
  }
	

  return (
    <div className="App">
		<p>{counter}</p>
      <button onClick={onClick}>Style it</button>
    </div>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
