import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = 'white';


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
