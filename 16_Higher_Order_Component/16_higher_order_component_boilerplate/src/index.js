import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  )
}

const buttonWithStyles = (CompParam, name = 'default') => {
  const colors = [
    {
      name: 'default',
      backgroundColor: '#e7e7e7',
      color: '#000000',
    },
    {
      name: 'react',
      backgroundColor: '#61dbfb',
      color: '#ffffff',
    },
    {
      name: 'success',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
    {
      name: 'info',
      backgroundColor: '#2196F3',
      color: '#ffffff',
    },
    {
      name: 'warning',
      backgroundColor: '#ff9800',
      color: '#ffffff',
    },
    {
      name: 'danger',
      backgroundColor: '#f44336',
      color: '#ffffff',
    },
  ]
  const { backgroundColor, color } = colors.find((c) => c.name === name)

  const buttonStyles = {
    backgroundColor,
    padding: '10px 45px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
    color,
  }


  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}

const NewButton = buttonWithStyles(Button)
const ReactButton = buttonWithStyles(Button, 'react')
const InfoButton = buttonWithStyles(Button, 'info')
const WarningButton = buttonWithStyles(Button, 'warning')
const DangerButton = buttonWithStyles(Button, 'danger')
const SuccessButton = buttonWithStyles(Button, 'success')



const userCard = (ComponentParameter) => {

	const buttonStyles = {
		backgroundColor: 'white',
		padding: '10px 45px',
		border: 'none',
		borderRadius: 3,
		margin: 3,
		cursor: 'pointer',
		fontSize: '1.25rem',
		color: 'red',
	  }

	  return (props) => {
		return <ComponentParameter {...props} style={buttonStyles} />
	  }
}

const FirstButton = userCard(Button);
const SecButton = userCard(Button);
const ThirdButton = userCard(Button);
const FourthButton = userCard(Button);



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Higher Order Components</h1>
        <Button text="No Style" onClick={() => alert("I am not styled yet")} />
        <NewButton
          text="Styled Button"
          onClick={() => alert("I am the default style")}
        />
        <ReactButton text="React" onClick={() => alert("I have react color")} />
        <InfoButton
          text="Info"
          onClick={() => alert("I am styled with info color")}
        />
        <SuccessButton
          text="Success"
          onClick={() => alert("I am successful")}
        />
        <WarningButton
          text="Warning"
          onClick={() => alert("I warn you many times")}
        />
        <DangerButton
          text="Danger"
          onClick={() => alert("Oh no, you can not restore it")}
        />

        <FirstButton text="FirstButton" onClick={() => alert("First button")} />
        <SecButton text="SecButton" onClick={() => alert("Second Button")} />
        <ThirdButton text="ThirdButton" onClick={() => alert("Third button")} />
        <FourthButton
          text="FourthButton"
          onClick={() => alert("Fourth Button")}
        />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/challenges">Challenges</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
              <Route path="/" element={<Home />} />
			  <Route exact strict path="/contact" element={<Contact />} />
              <Route exact strict path="/challenges" element={<Challenges />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
