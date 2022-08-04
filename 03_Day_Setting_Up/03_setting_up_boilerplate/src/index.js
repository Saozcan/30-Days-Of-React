/* // index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import htmlImage from './images/html_logo.png'
import reactLogo from './images/react_logo.png'
import cssLogo from './images/css_logo.png'

// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './math.js'

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from './math.js'

import * as everything from './math.js'
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)
// JSX element, header


// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div>
    <img src={asabenehImage} alt='asabeneh image' />
	<img src={cssLogo} alt='cssLogo' />
	<img src={htmlImage} alt='html image' />
	<img src={reactLogo} alt='react logo' />
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
 */

import React from 'react'
import ReactDOM from 'react-dom'

import asabenehImg from './images/asabeneh.jpg'

const rootElement = document.getElementById('root')

const mainElement = (
	<main>
		<div className='main-wrapper'>
			<div className='h1Div'>
				<h1>SUBSCRIBE</h1>
				<p>Sign up with your email adress to receive news and updates</p>
			</div>
			<div>
				<input className='firstName' placeholder='First Name'></input>
				<input className='lastName' placeholder='Last Name'></input>
				<input className='email' placeholder='Email'></input>
			</div>
			<div>
				<button className='subscribeButton'>Subscribe</button>
			</div>
		</div>
	</main>
);

//img

const mainElement2 = (
	<main>
		<div className='mainDiv2'>
			<div className='imgDiv'>
				<img src={asabenehImg} alt='asabenehImg'/>
			</div>
			<div className='nameAndJob'>
				<h2>ASABENEH YETAYEH</h2>
				<p>Senior Developer, Finland</p>
			</div>
			<div className='skills'>
				<h2>SKILLS</h2>
				<div className='skills-wrapper'>
					<div className='skills-alone'>HTML</div>
					<div className='skills-alone'>CSS</div>
					<div className='skills-alone'>Sass</div>
					<div className='skills-alone'>JS</div>
					<div className='skills-alone'>React</div>
					<div className='skills-alone'>Redux</div>
					<div className='skills-alone'>Node</div>
					<div className='skills-alone'>MongoDB</div>
					<div className='skills-alone'>Python</div>
					<div className='skills-alone'>Flask</div>
					<div className='skills-alone'>Django</div>
					<div className='skills-alone'>NumPy</div>
					<div className='skills-alone'>Pandas</div>
					<div className='skills-alone'>Data Analysis</div>
					<div className='skills-alone'>MYSQL</div>
					<div className='skills-alone'>GraphQL</div>
					<div className='skills-alone'>D3.js</div>
					<div className='skills-alone'>Gatsby</div>
					<div className='skills-alone'>Docker</div>
					<div className='skills-alone'>Heroku</div>
					<div className='skills-alone'>Gıt</div>
				</div>
			</div>
		</div>
	</main>
)


const app = (
	<div className='app'>
		{mainElement},
		{mainElement2}
	</div>
);

ReactDOM.render(app, rootElement);