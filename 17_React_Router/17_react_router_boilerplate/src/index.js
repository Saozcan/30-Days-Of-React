import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  Prompt,
} from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component

const challenges = [
  {
    name: '30 Days Of Python',
    description:
      '30 Days of Python challenge is a step by step guide to learn Python in 30 days.',
    status: 'completed',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '20 Nov 2019 - 20 Dec 2019',
    slug: 'pyhton',
    url:
      'https://github.com/https://https://github.com/Asabeneh/30-Days-Of-Python.com/Asabeneh/30-Days-Of-JavaScript/30-Days-Of-React',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Days Of JavaScript',
    description:
      '30 Days of JavaScript challenge is a step by step guide to learn JavaScript in 30 days.',
    status: 'completed',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '1 Jan 2020 - 30 Jan 2020',
    slug: 'javascript',
    url: 'https://github.com/Asabeneh/30-Days-Of-JavaScript',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Days Of React',
    description:
      '30 Days of React challenge is a step by step guide to learn React in 30 days.',
    status: 'ongoing',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '1 Oct 2020- 30 Oct 2020',
    slug: 'react',
    url: 'https://github.com/Asabeneh/30-Days-Of-React',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 HTML and CSS',
    description:
      '30 Days of HTML and CSS challenge is a step by step guide to learn HTML and CSS in 30 days.',

    status: 'coming',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '',
    slug: 'html-and-css',
    url: '',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 ReactNative',
    description:
      '30 Days of ReactNative challenge is a step by step guide to learn ReactNative in 30 days.',
    status: 'coming',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '',
    slug: 'reactnative',
    url: '',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Data Analysis',
    description:
      '30 Days of Data Analysis challenge  is a step by step guide to learn about data, data visualization and data analysis in 30 days.',
    status: 'coming',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '',
    slug: 'data-analysis',
    url: '',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Machine Learning',
    description:
      '30 Days of Machine learning challenge  is a step by step guide to learn data cleaning, machine learning models and predictions in 30 days.',
    status: 'coming',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '',
    slug: 'machine-learning',
    url: '',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
]

const Challenge = ({
  challenge: {
    name,
    description,
    status,
    days,
    level,
    duration,
    author: { firstName, lastName },
  },
}) => (
  <div>
    <h1>{name}</h1>
    <p>{level}</p>
    <p>
      Author: {firstName} {lastName}
    </p>
    {duration && (
      <>
        {' '}
        <small>{duration}</small> <br />
      </>
    )}
    <small>Number of days: {days}</small>

    <p>{description}</p>
  </div>
)

const Challenges = (props) => {
  const path = props.location.pathname
  const slug = path.split('/').slice(path.split('/').length - 1)[0]
  const challenge = challenges.find((challenge) => challenge.slug === slug)

  return (
    <div>
      <h1>30 Days Of React Challenge</h1>
      <ul>
        {challenges.map(({ name, slug }) => (
          <li key={slug}>
            <Link to={`/challenges/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route
          exact
          path={'/challenges'}
          element={() => <h1>Choose any of the challenges</h1>}
        />
        <Route
          path={path}
          element={(props) => <Challenge challenge={challenge} />}
        />
      </Routes>
    </div>
  )
}

const NotFound = (props) => <h1>The page your looking for not found</h1>
const Navbar = ({ username }) => (
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/contact'>Contact</Link>
    </li>
    <li>
      <Link to={`/user/${username}`}>User</Link>
    </li>
    <li>
      <Link to='/challenges'>Challenges</Link>
    </li>
  </ul>
)

const User = ({ match, isLoggedIn, handleLogin }) => {
  const username = match.params.username
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome {username} to the challenge</h1>
          <small>Now, you can navigate through all the challenges</small> <br />
        </>
      ) : (
        <p>Please login in to access the challenges </p>
      )}
      <button onClick={handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  )
}

const Welcome = ({ handleLogin, isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? 'Welcome to the challenge' : <p>Please login in </p>}
      <button onClick={handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  )
}
class App extends Component {
  state = {
    isLoggedIn: false,
    firstName: 'Asabeneh',
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar username={this.state.firstName} />

            message={({ pathname }) => {
              return this.state.isLoggedIn &&
                pathname.includes('/user/Asabeneh')
                ? 'Are you sure you want to logout?'
                : true
            }}

          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route
              path='/user/:username'
              element={(props) => (
                <User
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path='/login'
              element={(props) => (
                <Welcome
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path='/challenges'
              element={(props) => {
                return this.state.isLoggedIn ? (
                  <Challenges {...props} />
                ) : (
                  <Navigate to='/user/asabeneh' />
                )
              }}
            />
            <Route exact path='/' element={<Home />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
