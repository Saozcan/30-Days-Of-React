import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'


//Exercises
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'

const ImgsTag = (props) => {
	const imgDivStyle = {

	}
	const imgStyle = {
		height: '5rem',
		width: '5rem'
	}
	return (
		<div style={imgDivStyle}>
			<img style={imgStyle}src={props.src} alt={props.alt}></img>
		</div>
	)
}
const AllImgs = () => {
	const allImgsStyle = {
		display: 'flex',
		margin: '3rem 0',
	}
	/* const allImgsObjs = [
		{src: {htmlLogo}, alt: 'HTML Logo'},
		{src: {cssLogo}, alt: 'CSS Logo'},
		{src: {jsLogo}, alt: 'JS Logo'},
		{src: {reactLogo}, alt: 'React Logo'},
	] */
	const allImgsArray = [
		htmlLogo,
		cssLogo,
		jsLogo,
		reactLogo
	]
	const allImgsList = allImgsArray.map((element) => <ImgsTag key={element} src={element} alt={element} />)
	return (
		<div style={allImgsStyle}>
			{allImgsList}
		</div>
	)
}

const hexaNumber = () => {
	const base = "0123456789abcdef";

	let retNum = ""
	for (let i = 0; i < 6; i++) {
		retNum += (base[Math.floor(Math.random() * 16)]);
	}
	return `#${retNum}`
}

const ColorTag = () => {
	const hexaNumberInComp = hexaNumber();
	const style = {
		width: '100%',
		height: '5rem',
		backgroundColor: hexaNumberInComp,
		borderRadius: '5px',
		margin: '.5rem 0',
		color: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 'bold'
	}
	return (
		<div style={style}>{hexaNumberInComp}</div>
	)
}

const manyTags = () => {
	const list = []

	for (let i = 0; i < 5; i++) {
		list.push(<ColorTag />)
	}
	return list;
}

const ColorFull = () => {
	const style = {

	}
	return (
		<div style={style}>
			{manyTags()}
		</div>
	)
}

const UserCardFull = ({userCardDetail: {name, job, country, src, alt, skills, date}}) => {
	const style = {

	}
	const skillStyle = {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '1rem 0'

	}
	const skillAloneStyle = {
		backgroundColor: '#6fc',
		margin: '5px',
		padding: '0.3rem 0.5rem',
		borderRadius: '5px'
	}
	const img = {
		borderRadius: '50%',
		width: '10rem',
		height: '10rem'
	}

	const skillList = skills.map((element, index) => <li key={index} style={skillAloneStyle}>{element}</li>)
	return (
		<div style={style}>
			<div>
				<img style={img} src={src} alt={alt}></img>
			</div>
			<div>
				<h2>{name}</h2>
			</div>
			<div>
				<p>{job}{country}</p>
			</div>
			<div>
				<ul style={skillStyle}>
					{skillList}
				</ul>
			</div>
			<div>
				{/* <p>{showDate({date})}</p> */}
			</div>
		</div>
	)
}

const userCardDetail = {
	name: 'Asabeneh Yetayeh',
	job: 'Senior Developer',
	country: 'Finland',
	src: asabenehImage,
	alt: 'Asabeneh Image',
	skills: [
		'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django',
		'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL', 'D3,js', 'Gatsby', 'Docker', 'Heroku',
		'Git'
	],
	date: new Date()
}


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

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
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

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
	  <AllImgs />
	  <ColorFull />
	  <UserCardFull userCardDetail={userCardDetail} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  return (
    <div className="app">
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  );
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
