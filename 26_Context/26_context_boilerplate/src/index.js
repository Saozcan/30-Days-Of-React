import React, { useState, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'

const ThemeContext = React.createContext('white');
const BackgroundColor = React.createContext('black');

class App extends React.Component {
  render() {
    // Geçerli temayı aşağıdaki ağaca taşımak için bir Provider kullanın.
    // Herhangi bir bileşen ne kadar derinde olursa olsun okuyabilir.
    // Bu örnekte, mevcut değer olarak "dark" geçiyoruz.
    return (
      <ThemeContext.Provider value="orange">
        <BackgroundColor.Provider value="black">
          <Toolbar />
          <div>
            <div>
              <Footer />
            </div>
          </div>
        </BackgroundColor.Provider>
      </ThemeContext.Provider>
    );
  }
}

// Aradaki bir bileşen artık temayı açıkça aşağı aktarmak zorunda değil.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

const Footer = () => {

	return (
		<React.Fragment>
			<BackgroundChange />
		</React.Fragment>
	)
}

const BackgroundChange = () => {

	const value = useContext(BackgroundColor);

	const style = {
		width: '100px',
		height: '100px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: value,
		color: 'white',
	}

	return (
		<div style={style}>
			{value}
		</div>
	)
}

class ThemedButton extends React.Component {
  // Mevcut tema context'ini okumak için bir contextType atayın.
  // React, en yakın tema Provider'ı bulacak ve değerini kullanacak.
  // Bu örnekte mevcut tema "dark"tır.
  static contextType = ThemeContext;
  static colors = BackgroundColor;
  
  render() {

	const style = {
		color: this.context,
		display: 'flex',
		flexDirection: 'column',
	}

    return (
		<div style={style}>
			{this.context}
			{this.context}
		</div>
	)
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
