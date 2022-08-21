import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";



const App = () => {

	const [count, setCount] = useState(0);
	const [todos, setTodos] =useState([]);

	/* const calculation = expnesiveCalculation(count); // there is a big delay cause of the expensiveCalculation
	//The expensiveCalculation function runs on every render */

	//useMemo
	const calculation = useMemo(() => expnesiveCalculation(count), [count]);
	//only render when count change

	const increment = () => {
		setCount((c) => c + 1);
		// setCount(count + 1)
	}
	const addTodo = () => {
		setTodos((t) => [...t, "New Todo"]);
	}

	const App = {

	}

	return (
    <div style={App}>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

const expnesiveCalculation = (number) => {
	console.log("Calculating...");
	for (let i = 0; i < 1000000000; i++) {
		number += 1;
	}
	return number;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement); 