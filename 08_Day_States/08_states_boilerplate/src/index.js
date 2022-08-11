// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import { countriesData } from './data/countries.js'

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

class CountryCard extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {
			name,
			capital,
			languages,
			population,
			flag,
			currency,
		} = this.props.data

		const style = {
			width: '40rem',
			height: '30rem',
			backgroundColor: '#EDEADE',
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			boxShadow: `0 0px 10px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`
		}
		const imgDiv = {
			margin: '1rem',
		}
		const imgTagDiv = {
			width: '15rem',
			borderRadius: '5px'
		}
		const nameStyle = {

		}
		const detailsStyle = {
			width: '25rem',
			marginTop: '1.5rem',

		}
		const ulStyle = {

		}
		const spanStyle = {
			fontWeight: 'bold',
		}

		return (
			<div style={style}>
				<div style={imgDiv}>
					<img style={imgTagDiv} src={asabenehImage} alt={name}></img>
				</div>
				<div style={nameStyle}>
					<h2>{name}</h2>
				</div>
				<div style={detailsStyle}>
					<ul style={ulStyle}>
						<li><span style={spanStyle}>Capital:</span> {capital}</li>
						<li><span style={spanStyle}>Languages:</span> {languages}</li>
						<li><span style={spanStyle}>Population:</span> {population}</li>
						<li><span style={spanStyle}>Curreny:</span> {currency}</li>
					</ul>
				</div>
			</div>
		)
	}
}

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
	  backColor,
    } = this.props.data

	const style = {
		backgroundColor: `${backColor === '#10182a' ? '#10182a' : '#60dbfc'}`,
		color: `${backColor === '#10182a' ? 'white' : 'black'}`
	}
    return (
      <header style={style}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
	  backColor,
	  randomNumber,
	  randomNumberSetState,
    } = this.props
	const style = {
		backgroundColor: `${backColor === '#10182a' ? '#10182a' : 'white'}`,
		color: `${backColor === '#10182a' ? 'white' : 'black'}`
	}
	const countryCardStyle = {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	}
	const countryButtonStyle = {
		margin: '1rem',
	}
    return (
      <main style={style}>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text="Greet People"
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
          <Button
            text="Change Background"
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
          <div style={countryCardStyle}>
            <CountryCard data={countriesData[randomNumber]} />
			<div style={countryButtonStyle} onClick={randomNumberSetState}>
				<Button text={'Select Country'} style={buttonStyles} />
			</div>
          </div>
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

	const style = {
		backgroundColor: `${this.props.backColor === '#10182a' ? '#10182a' : '#60dbfc'}`,
		color: `${this.props.backColor === '#10182a' ? 'white' : 'black'}`
	}
    return (
      <footer style={style}>
        <div className='footer-wrapper' >
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

/* const changeBackground = ""
const mainStyle = document.getElementById('main');
if (changeBackground) {
	mainStyle.style.backgroundColor = changeBackground;
} */

class App extends React.Component {
  state = {
    count: 0,
	randomNumber: 10,
    styles: {
      backgroundColor: '',
      color: '',
    },
  }
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }
  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  changeBackground = () => {
	  //this.setState({backgroundColor: `${this.state.backgroundColor === 'white' ? '#10182a' : 'white'}`})
	  this.setState({backgroundColor: this.state.styles.backgroundColor = `${this.state.styles.backgroundColor === 'white' ? '#10182a' : 'white'}`})
  }
  getRandomNumber = () => {
	this.setState({randomNumber: this.state.randomNumber = `${Math.floor(Math.random() * countriesData.length)}`})
  }
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
	  backColor: this.state.styles.backgroundColor,
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage }

    return (
      <div className='app'>
        {/* {this.state.backgroundColor} */}
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
		  backColor={this.state.styles.backgroundColor}
		  randomNumber={this.state.randomNumber}
		  randomNumberSetState={this.getRandomNumber}
        />
        <Footer date={new Date()} backColor={this.state.styles.backgroundColor}/>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
