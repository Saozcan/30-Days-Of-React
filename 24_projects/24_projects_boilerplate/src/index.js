import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import { VscGraph } from 'react-icons/vsc'
import { countriesData } from './data/countries';
import react_logo from './images/react_logo.png'

const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = 'bisque';




const Header = ({totalCountry}) => {


	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: 'purple',
	}

	const h1Style = {
		color: 'orange',
		fontWeight: 'bold',

	}

	return (
		<div style={style} className='header-wrapper'>
			<h1 style={h1Style}>World Countries Data</h1>
			<div>
				<span>Currently, we have <span>{totalCountry}</span> countries</span>
			</div>
		</div>
	)
}

const SearchAndGraph = ({
	onClick,
	onChange,
}) => {


	const style = {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'white',
	}
	const inputStyle = {
		margin: '1rem',
		width: '20rem',
		height: '3rem',
		borderRadius: '30px',
		padding: '5px 15px',
		backgroundColor: '#faf6f6',
		borderColor: '#f8e6e6',
		borderStyle: 'solid',
		outline: 'none',
	}
	const buttonStyle = {
		fontSize: '3rem',
		backgroundColor: 'white',
		border: 'none',
		color: 'orange',
	}

	return (
		<div style={style}>
			<input style={inputStyle} 
			placeholder='Search countries by name, city and languages'
			onChange={onChange}
			></input>
			<button style={buttonStyle} onClick={onClick} ><VscGraph /></button>
		</div>
	)
}

const CountryCard = ({ data }) => {

	const {
		capital,
		currency,
		flag,
		languages,
		name,
		population,
	} = data;

	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: 'white',
		width: '18rem',
		height: '30rem',
		margin: '10px 20px',
	}

	const imgDivStyle = {
		margin : '20px 0',
		boxShadow: '0 0 10px .01px #000f0f',
	}

	const imgStyle = {
		width: '10rem',
	}

	const spanStyle = {
		fontWeight: 'bold',
		color: 'black',
	}

	const listStyle = {
		width: '70%',
		margin: '10px 0',
		fontWeight: 'bold',
		color: 'grey',

	}

	return (
		<div style={style}>
			<div style={imgDivStyle}>
				<img style={imgStyle} src={react_logo}/>
			</div>
			<div style={{color: 'orange', textAlign: 'center', width: '80%'}}>
				<h2>{name}</h2>
			</div>
			<div style={listStyle}>
				<ul>
					<li><span style={spanStyle}>Capital:</span> {capital}</li>
					<li><span style={spanStyle}>Languages:</span> {languages.length > 1 ? languages.join(' ') : languages}</li>
					<li><span style={spanStyle}>Population:</span> {population.toLocaleString()}</li>
					<li><span style={spanStyle}>Currency:</span> </li>
				</ul>
			</div>
		</div>
	)
}

const CountryList = ({data}) => {

	const style = {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	}

	const countryList = data.map((element, index) => <CountryCard data={element} key={index} />)

	return (
		<div style={style}>
			{countryList}
		</div>
	)
} 

const GraphCard = ({data}) => {

	const {
		name,
		population,
	 } = data;

	 const style = {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	 }

	 const graphStyle = {
		display: 'flex',
		justifyContent: 'flex-start',
		width: '40rem',
	 }

	 const inGraphStyle = {
		backgroundColor: 'orange',
		width: `${(population / totalPopulation) * 40}rem`,
		height: '1rem',
	 }

	return (
		<div style={style}>
			<div style={{width: '5rem',}}>{name}</div>
			<div style={graphStyle}>
				<div style={inGraphStyle}></div>
			</div>
			<div style={{width: '10rem', marginLeft: '10px',}}>{population}</div>
		</div>
	)
}

const GraphList = ({countryData}) => {

	const [data, setData] = useState(true);

	const allButtonStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}

	const style = {
		width: '80rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',

	}

	const worldData = {
		name: 'World',
		population: totalPopulation,
	}
	const worldGraphCart = <GraphCard data={worldData} /> 
	countriesData.sort((a, b) => b.population - a.population);
	const top10Country = countriesData.splice(0, 10);
	const countryList = top10Country.map((element, index) => {
		return <GraphCard data={element} key={index} />
	})
	console.log(countryList);
	return (
		<div style={style}>
			<div style={allButtonStyle}>
				<div>
					<button onClick={() => {setData(false)}} >POPULATION</button>
					<button onClick={() => {setData(true)}}>LANGUAGES</button>
				</div>
				<div>
					<span>{data === false ? `10 Most populated countries in the world` :
					`10 Most spoken languages in the world`}
					</span>
				</div>
			</div>
			<div>
				{worldGraphCart}
				{countryList}
			</div>
		</div>
	)
}

const Main = ({
	data,
	onClick,
	onChange,
}) => {

	return (
		<div className='main-wrapper'>
			<SearchAndGraph onClick={onClick} onChange={onChange}/>
			<CountryList data={data} />
			<GraphList countryData={data}/>
		</div>
	)

}

const Footer = () => {

	return (
		<div className='footer-wrapper'>
			Footer
		</div>
	)
}

let totalPopulation = 0
countriesData.forEach((element) => {
	totalPopulation += element.population;
})

const App = () => {

const [constData, setConstData] = useState(countriesData);
const [data, setData] = useState(countriesData);

useEffect(() => {
})

const handleChangeValue = (e) => {
	const filtreData = constData.filter((element) => element.name.toLowerCase().includes(e.target.value.toLowerCase()))
	setData(filtreData);
}
const handleOnClick = (e) => {
}


	return (
		<div className='App'>
			<Header totalCountry={data.length}/>
			<Main 
			data={data}
			onChange={handleChangeValue}
			onClick={handleOnClick}
			/>
			<Footer />
		</div>
	)
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);