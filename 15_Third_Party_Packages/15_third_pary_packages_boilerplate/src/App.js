import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
  TiArrowUp,
} from 'react-icons/ti'
import cx from 'classnames'
// import Header from './components/header/Header'



/* const SubTitle = styled.h2`
font-weight: 300;
` */





export default class App extends Component {
	constructor(props) {
	  super(props)
	  console.log('I am  the constructor and  I will be the first to run.')
	  this.state = {
		firstName: 'John',
		data: [],
		day: 1,
		congratulate: '',
	  }
	}
  
	componentDidMount() {
	  const API_URL = 'https://restcountries.eu/rest/v2/all'
	  axios
		.get(API_URL)
		.then((response) => {
		  this.setState({
			data: response.data,
		  })
		})
		.catch((error) => {
		  console.log(error)
		})
  
	}
	static getDerivedStateFromProps(props, state) {
	  return { firstName: props.firstName }
	}
	shouldComponentUpdate(nextProps, nextState) {
	  console.log(nextProps, nextState)
	  console.log(nextState.day)
	  if (nextState.day > 31) {
		return false
	  } else {
		return true
	  }
	}
  
	doChallenge = () => {
	  this.setState({
		day: this.state.day + 1,
	  })
	}
	renderCountries = () => {
	  return this.state.data.map((country) => {
		const languageOrLanguages =
		  country.languages.length > 1 ? 'Langauges' : 'Language'
		const formatLanguages = country.languages
		  .map(({ name }) => name)
		  .join(', ')
		return (
		  <div>
			<div>
			  {' '}
			  <img src={country.flag} alt={country.name} />{' '}
			</div>
			<div>
			  <h1>{country.name}</h1>
			  <p>Capital: {country.capital}</p>
			  <p>
				{languageOrLanguages}: {formatLanguages}
			  </p>
			  <p>Population: {country.population}</p>
			</div>
		  </div>
		)
	  })
	}
	componentDidUpdate(prevProps, prevState) {
	  if (prevState.day === 30) {
		this.setState({
		  congratulate: 'Congratulations,Challenge has been completed',
		})
	  }
	  console.log(prevState, prevProps)
	}
  
	render() {
	  return (
		<div className='App'>
		  <p>This challenge was started {moment('2020-10-01').fromNow()}</p>
		  <p>The challenge will be over in {moment('2020-10-30').fromNow()}</p>
		  <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
		  <h1>React Component Life Cycle</h1>
		  <h1>Calling API</h1>
		  <TiSocialLinkedinCircular />
		  <TiSocialGithubCircular />
		  <TiSocialTwitterCircular />
		  <TiArrowUp />
  
		  <button onClick={this.doChallenge}>Do Challenge</button>
		  <p>Challenge: Day {this.state.day}</p>
		  {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
		  <div>
			<p>There are {this.state.data.length} countries in the api</p>
			<div className='countries-wrapper'>{this.renderCountries()}</div>
		  </div>
		</div>
	  )
	}
  }