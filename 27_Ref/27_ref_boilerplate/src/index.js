import React, { useRef, useState, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FaRegClipboard } from 'react-icons/fa'

const Number = React.createContext();

const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#f9fbfe';

const App = (props) => {

	const [number, setNumber] = useState(0);
	const [counter, setCounter] = useState(0);

  const ref = useRef(null)
  const onClick = (e) => {
	setNumber(ref.current.value)
	setCounter(counter + 1); 
}

  const style = {
	fontFamily: 'Poppins, sans-serif',
	backgroundColor: '#f9fbfe',
  }

useEffect(() => {
}, [number])

  return (
    <div style={style} className="App">
      <Header />
      <Number.Provider value={number}>
          <Main
            refValue={ref}
            onClick={onClick}
          />
		<NumberCardList />
      </Number.Provider>
      {/* <h1 ref={refqwe}>How to style HTML from the DOM tree using useRef</h1> */}
      {/* <button onClick={onClick}>Style it</button> */}
    </div>
  );
}


const Header = () => {

	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '3% 0',
	}

	return (
    <div style={style}>
      <div>
        <h1 style={{ fontWeight: "400" }} >30 Days Of React</h1>
      </div>
      <div>
        <h3 style={{ fontSize: "20px", fontWeight: "450" }}>
          Hexadecimal Colors
        </h3>
      </div>
    </div>
  );
}



const Main = ({
	onClick,
	refValue
}) => {

	const [theme, setTheme] = useState('white');

	const onMouseOver = () => {
		setTheme('#eeb2f5');
	  }
	
	  const onMouseOut = () => {
		setTheme('white');
	}
	
	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '10%',
	}

	const inputButtonStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '80%',
	}
	const inputStyle = {
		backgroundColor: theme,
		width: '80%',
		height: '45px',
		border: 'none',
		borderRadius: '10px',
		padding: '15px 20px',
		fontSize: '16px',
		outline: 'none',
		color: 'black',
	}
	const buttonStyle = {
		backgroundColor: '#595dff',
		color: 'white',
		padding: '15px 25px',
		borderRadius: '5px',
		marginLeft: '2rem',
		border: 'none',
		cursor: 'pointer',
	}

	return (
		<div style={style}>
			<div style={inputButtonStyle}>
				<input 
				ref={refValue}
				onMouseOver={onMouseOver}
				onMouseOut={onMouseOut}
				style={inputStyle}></input>
				<button 
				onClick={onClick}
				style={buttonStyle}>GENERATE</button>
			</div>
		</div>
	)
}

const giveHexaColorNumber = () => {

	const hexBase = '0123456789abcde'
	let number = hexBase[Math.floor(Math.random() * 15)];
	for (let i = 0; i < 5; i++) {
		number += hexBase[Math.floor(Math.random() * 15)];
	}
	return `#${number}`
}
giveHexaColorNumber();

const NumberCard = () => {

	const onMouseOver = () => {
	}

	let hexNumber = giveHexaColorNumber();

	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		padding: '17px',
		backgroundColor: hexNumber,
		borderRadius: '10px',
		margin: '10px',
		color: 'white',
		fontWeight: 'bold',
		width: '10rem',
		height: '10rem',
	}

	const colorNumber = {
		margin: '20px 0',
	}

	const iconStyle = {
		fontSize: '30px',
	}

	return (
		<div style={style} onMouseOver={onMouseOver}>
			<div style={colorNumber} >
				{hexNumber}
			</div>
			<div style={iconStyle}>
				<FaRegClipboard />
			</div>
		</div>
	)
}

const NumberCardList = () => {

	const totalNumber = useContext(Number);

	const totalNumberList = []
	for (let i = 0; i < totalNumber; i++) {
		totalNumberList.push(<NumberCard key={i} />)
	}

	const bigStyle = {
		display: 'flex',
		justifyContent: 'center',
	}

	const style = {
		display: 'flex',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		margin: '0 30px',
		width: '70rem',
	}

	return (
    <div style={bigStyle}>
      <div style={style}>{totalNumberList}</div>
    </div>
  );
}





const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
