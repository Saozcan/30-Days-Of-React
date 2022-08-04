if you wanna use react you have to have a div what class=root

when you are render a jsx element, you gonna use the root div with render
	const rootElement = document.querySelector('.root')

	const header = (
			<header>
			<h1>Welcome to 30 Days Of React</h1>
			<h2>Getting Started React</h2>
			<h3>JavaScript Library</h3>
			<p>Asabeneh Yetayeh</p>
			<small>Oct 2, 2020</small>
			</header>

	ReactDOM.render(header, rootElement)


if you wanna make header, main and footer parts, you can use array style
Now, we have three JSX elements: the header, main and footer. The best way to render all of the three JSX elements is by wrapping them all in a parent JSX element or putting them in an array. To include JSX element inside another JSX element we use the curly bracket, {} and call the name of the JSX inside the curly bracket.

	// JSX element for the header part of the website
	const header = (
	<header>
		<h1>Welcome to 30 Days Of React</h1>
		<h2>Getting Started React</h2>
		<h3>JavaScript Library</h3>
		<p>Asabeneh Yetayeh</p>
		<small>Oct 2, 2020</small>
	</header>
	)

	// JSX element for the main part of the website
	const main = (
	<main>
		<p>Prerequisite to get started react.js:</p>
		<ul>
		<li>HTML</li>
		<li>CSS</li>
		<li>JavaScript</li>
		</ul>
	</main>
	)

	// JSX element for the footer part of the website
	const footer = (
	<footer>
		<p>Copyright 2020</p>
	</footer>
	)

	// JSX element which contain all, it is a container or parent
	const app = (
	<div>
		{header}
		{main}
		{footer}
	</div>
	)


we can use the <style> tag like styles.css file 

    <style>
      /* == General style === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: 'Montserrat';
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }


      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Height of the footer */
        background: rgb(156, 46, 129);
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>


Injecting data to a JSX Element
So far, we used static data on the JSX elements, but we can also pass different data types as a dynamic data. The dynamic data could be string, number, boolean, array or object. Let us see each of the data types step by step. To inject data to a JSX we use the {} bracket.

	const welcome = 'Welcome to 30 Days Of React'
	const title = 'Getting Started React'
	const subtitle = 'JavaScript Library'
	const authorFirstName = 'Asabeneh'
	const authorLastName = 'Yetayeh'
	const date = 'Oct 1, 2020'

	// JSX element, header
	const header = (
	<header>
		<div className='header-wrapper'>
		<h1>{welcome}</h1>
		<h2>{title}</h2>
		<h3>{subtitle}</h3>
		<p>
			Instructor: {authorFirstName} {authorLastName}
		</p>
		<small>Date: {date}</small>
		</div>
	</header>
	)

	//diffrent way
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
	const personAge = <p> {age}</p>


DOM document object model, 