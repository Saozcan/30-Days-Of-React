import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Country = ({ country: { name, flag, population } }) => {
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div class='country_text'>
        <p>
          <span>Population: </span>
          {population}
        </p>
      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCountryData()
  }
  fetchCountryData = async () => {
	const url = 'https://api.thecatapi.com/v1/breeds';
	try {
		const response = await axios.get(url);
		const data = await response.data;


		const life_span = [];
		const metricValue = [];

		data.map((element) => {
			const {weight} = element;
			life_span.push({"life span:": element.life_span})
			metricValue.push({metric: weight.metric})
		})
		console.log(metricValue);
		console.log(life_span);

	} catch (error) {
		console.log(error);
	}
  }
  /* fetchCountryData = async () => {
    const url = 'https://api.thecatapi.com/v1/bres'
    try {
      const response = await axios.get(url);
      const data = await response.data;

	  console.log(data);

      const nameAndCountry = [];
	  data.map((element) => {
		nameAndCountry.push({name: element.id, country: element.origin})
	  })
	  console.log(nameAndCountry);

      this.setState({
        data,
      });
    } catch (error) {
      console.log(error)
    }
  } */

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (
              <Country country={country} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
