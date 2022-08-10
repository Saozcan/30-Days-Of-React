/* import React from 'react'
import ReactDOM from 'react-dom'


// importing data

import { countriesData } from './data/countries'
import { tenMostHighestPopulations } from './data/ten_most_highest_populations'

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
 */

import React from 'react'
import ReactDOM from 'react-dom'

import {tenHighestPopulation} from './../src/data/ten_most_highest_populations';

const Header = () => {
	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
	
	return (
    <div className="header-wrapper">
      <div style={style}>
        <h1>30 Days Of React</h1>
        <h3>Number Generator</h3>
      </div>
    </div>
  );
}

const isPrime = (number) => {
	if (number === 2) {
		return true
	}
	if (number < 2) {
		return false
	}
	for (let i = 2; i <= number / i; i++) {
		if (number % i === 0)
			return false
	}
	return true
}

const getColor = (number) => {
	if (isPrime(number)) {
		return 'red'
	}
	else if (number % 2 === 0) {
		return 'green'
	}
	else if (number % 2 === 1) {
		return 'orange'
	}
}

const NumberCube = ({number, index}) => {
	const style = {
		margin: '5px',
		height: '7rem',
		width: '7rem',
		color: 'white',
		backgroundColor: getColor(number),
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
	return (
		<div style={style} key={index} >{number}</div>
	)
}



const Numbers = ({numberLimit}) => {
	const numbers = [...Array(numberLimit).keys()]
	
	const numberList = numbers.map((element, index) => <NumberCube number={element} index={index} />)
	
	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap'
	}
	return (
		<div style={style}>
			{numberList}
		</div>
	)
}

const getColorNumber = () => {
	let number = ""
	const base = "0123456789abcdef"
	for (let i = 0; i < 6; i++) {
		number += base[Math.floor(Math.random() * 16)];
	}
	return `#${number}`
}

const ColorFullCube = ({colorNumber, index}) => {
	const style = {
		height: '7rem',
		width: '7rem',
		margin: '5px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colorNumber
	}
	return (
		<div style={style} key={index}>
			{colorNumber}
		</div>
	)
}

const ColorFullCubes = ({numberLimit}) => {
	const numbers = [...Array(numberLimit).keys()]
	const colorNumbersList = numbers.map((element) => <ColorFullCube colorNumber={getColorNumber()} key={element} />)

	const style = {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
	}
	return (
		<div style={style}>
			{colorNumbersList}
		</div>
	)
}

let totalPopulation = 0

tenHighestPopulation.forEach(element => {
	if (element.country === 'World') {
		totalPopulation = element.population;
	}
});

const EachCountryPopulation = ({name, population, key}) => {
	const style = {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '10px 0'
	}
	const countryName = {
		width: '10rem'
	}
	const graphOut = {
		width: '42rem',
	}
	const graphIn = {
		backgroundColor: 'orange',
		width: `${population / totalPopulation * 40}rem`,
		height: '2rem'
	}
	const populationNumber = {

	}

	return (
		<div style={style} key={key}>
			<div style={countryName}>{name}</div>
			<div style={graphOut}>
				<div style={graphIn}></div>
			</div>
			<div style={populationNumber}>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
		</div>
	)
}


const PrintMostTenPopulation = ({data}) => {
	const style = {

	}
	const header = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginBottom: '2rem'
	}
	const graphs = {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'space-between'
	}

	const dataList = data.map((name, index) => <EachCountryPopulation name={name.country} population={name.population} key={index} />)
	return (
		<div style={style}>
			<div style={header}>
				<h1>30 Days Of React</h1>
				<h3>World population</h3>
				<p>Ten most populated countries</p>
			</div>
			<div style={graphs}>
				{dataList}
			</div>
		</div>
	)
}

const Main = () => {

	return (
		<div className='main-wrapper'>
			<Numbers numberLimit={32} />
			<ColorFullCubes numberLimit={32} />
			<PrintMostTenPopulation data={tenHighestPopulation}/>
		</div>
	)
}

const App = () => {
	return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
