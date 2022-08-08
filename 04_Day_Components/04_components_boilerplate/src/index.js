// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    border: '2px solid black',
	backgroundColor: bgColor,
	color: 'white',
	border: 'none'
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

const HexaColorFull = () => {
	const hexaColorFullStyle = {
		margin: '2rem 0',
	}
	return (
		<div style={hexaColorFullStyle}>
			<HexaColor />
			<HexaColor />
			<HexaColor />
			<HexaColor />
			<HexaColor />
		</div>
	)
}

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => {
	const icon = {
		color: '#6cf',
	}
	const h2Style = {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	}

	return (
	<div className='user-card'>
		<img src={asabenehImage} alt='asabeneh image' />
		<h2 style={h2Style}>Asabeneh Yetayeh <i style={icon} class='bx bxs-check-square'></i></h2>
	</div>
	)
}

const Skills = () => {
	const style = {
		margin: '1rem 0',
	}
	const ulStyle = {
		display: 'flex',
		flexWrap: 'wrap',
				
	}
	const liStyle = {
		backgroundColor: '#6cf',
		width: 'auto',
		height: 'auto',
		margin: '5px',
		padding: '4px',
		borderRadius: '5px',
		color: 'white',
	}
	const techs = [
		'HTML',
		'CSS',
		'Sass',
		'JS',
		'React',
		'Redux',
		'Node',
		'MongoDB',
		'Python',
		'Flask',
		'Django',
		'Numpy',
		'Pandas',
		'Data Analysis',
		'MYSQL',
		'GraphQL',
		'D3.js',
		'Gatsby',
		'Docker',
		'Heroku',
		'Git'
	]
	const renderTechs = techs.map((element, index) => <li style={liStyle} key={index}>{element}</li>)
	return (
		<div style={style}>
			<h2>SKILLS</h2>
			<ul style={ulStyle}>
				{renderTechs}
			</ul>
		</div>
	)
}

const UserCardFull = () => {
	const style = {

	};
	return (
		<div style={style}>
			<UserCard />
			<p>Senior Developer, Finland</p>
			<Skills />
		</div>
	)
}

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}
const buttonStyles = {
  padding: '10px 20px',
  background: 'red',
  border: 'none',
  borderRadius: 5,
  color: 'white',
  width: '8rem'
}
const {padding, border} = buttonStyles;

const Button = () => <button style={buttonStyles}>Subscribe</button>

// Main Component

function ButtonClick() {
	return (
		<div className='buttonDiv'>
			<button>Click</button>
		</div>
	)
}

const imgTag = {
	height: '10rem',
	width: '10rem'
}

const GetImg = (props) => {
	return (
		<div >
			<img style={imgTag} src={props.path} alt={props.alt}></img>
		</div>
	)
}

const imgs = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}

const SubscribeComponentStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#6cf',
	width: 'auto',
	height: '15rem',
}

const inputTags = {
}

const input = {
	width: '10rem',
	height: '2.3rem',
	borderRadius: '10px',
	margin: '1rem',
	padding: '10px',
	outline: 'none',
	border: 'none'
}

const h3Style = {
	fontWeight: 'bold'
}


const SubscribeComponent = () => {
	return (
		<div style={SubscribeComponentStyle}>
			<h3 style={h3Style}>SUBSCRIBE</h3>
			<p>Sign up with your email address to receive news and updates.</p>
			<div style={inputTags}>
				<input style={input} className='firstName' placeholder='First Name'></input>
				<input style={input} className='lastName' placeholder='Last Name'></input>
				<input style={input} className='email' placeholder='Email'></input>
			</div>
			<div>
				<Button />
			</div>
		</div>
	)
}

const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
	  <ButtonClick />
	  <div style={imgs}>
		<GetImg path="./images/html_logo.png" alt="HTML Logo"/>
		<GetImg path="./images/css_logo.png" alt="CSS Logo"/>
		<GetImg path="./images/js_logo.png" alt="JS Logo"/>
		<GetImg path="./images/react_logo.png" alt="React Logo"/>
	  </div>
	  <div>
		<SubscribeComponent />
	  </div>
	  <HexaColorFull />
	  <UserCardFull />
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)



// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
