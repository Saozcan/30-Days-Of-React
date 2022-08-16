import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


const averaheValue = (values) => {

	console.log(values);

	const metric = [];
	const life_span = [];

	values.map((element) => {
		metric.push(element.weight.metric);
		life_span.push(element.life_span);
	})

	let totalCat = values.length;

	let metricTotalNumber = 0;
	let lifeTotalNumber = 0;

	let averageMetric = 0;
	let averageLife = 0;
	
	metric.map((element) => {
		metricTotalNumber += (Number(element.split('-')[0]) + Number(element.split('-')[1]))
	})
	averageMetric = (metricTotalNumber / (metric.length * 2)).toFixed(2);

	life_span.map((element) => {
		lifeTotalNumber += (Number(element.split('-')[0]) + Number(element.split('-')[1]));
	})
	averageLife = (lifeTotalNumber / (life_span.length * 2)).toFixed(2);

	return {metric: averageMetric, life: averageLife, total: totalCat}
}

class Header extends React.Component {

	render () {
		const style = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}
		const catDetails = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
		}

		const averageValues = averaheValue(this.props.data);
		console.log(averageValues)


		return (
			<div className='header-wrapper'>
				<div style={style}>
					<h1>30 DAYS OF REACT</h1>
				</div>
				<div style={catDetails}>
					<h2>Cats Paradise</h2>
					<h2>There are <span>{averageValues.total}</span> cat breeds</h2>
					<p>On average a cat can <span>{averageValues.metric}</span> weight about 
						<span> {averageValues.life}</span>
						</p>
				</div>
			</div>
		)
	}
}



const CatCard = ({data}) => {
	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '50rem',
		margin: '2rem',
		boxShadow: '0px 0px 20px 5px #888888',
	}
	const imgDiv = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	}
	const imgTag = {
		width: '50rem',
	}
	const descriptionDiv = {

	}
	const cardBottom = {
		margin: '1rem',
	}

	const {
		url,
		name,
		origin,
		temperament,
		life_span,
		weight,
		description,
	} = data

	return (
    <div style={style}>
      <div style={imgDiv}>
        <img style={imgTag} src={url} alt={name}></img>
      </div>
      <div style={cardBottom}>
        <div>
          <h3>{name}</h3>
          <h3>{origin}</h3>
        </div>
        <div>
          <ul>
            <li>Temperament: {temperament}</li>
            <li>Life Span: {life_span} years</li>
            <li>Weight: {weight} Kg</li>
          </ul>
        </div>
        <div style={descriptionDiv}>
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

const CatCards = ({datas}) => {

	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}

	const catDataLists = datas.map((element) => <CatCard data={element} />)

	return (
		<div style={style}>
			{catDataLists}
		</div>
	)
}

class Main extends React.Component {

	render () {
		return (
			<div className='main-wrapper'>
				Main
			</div>
		)
	}
}

// class Footer extends React.Component {

// 	render () {
// 		return (
// 			<div className='footer-wrapper'>
// 				Footer
// 			</div>
// 		)
// 	}
// }


class App extends React.Component {
state = {
	data: [],
	metric: [],
}

componentDidMount() {
		this.getCatDatas();
	}

getCatDatas = async () => {
	const url = 'https://api.thecatapi.com/v1/breeds';
	try {
		const response = await axios.get(url);
		const data = await response.data;
		
		const catData = []
		const catWeightLife = []
		data.map((element) => {
			
			const {
				image,
				name,
				origin,
				temperament,
				life_span,
				weight,
				description,
			} = element;

			if (image && name && origin && temperament &&
				life_span && weight && description) {
					const newData = {
						url: image.url,
						name,
						origin,
						temperament,
						life_span,
						weight: weight.metric,
						description,
					}
					catData.push(newData);
				}
			if (weight && life_span) {
				const newDataWeightLife = {
					weight,
					life_span,
				}
				catWeightLife.push(newDataWeightLife);
			}
		})
		this.setState({data: catData});
		this.setState({metric: catWeightLife});
	}
	catch(error) {
		console.log(error);
	}
}

	render () {
		return (
			<div className='App'>
				<Header data={this.state.metric}/>
				<Main />
				<CatCards datas={this.state.data} />
				{/* <Footer /> */}
			</div>
		)
	}
}



const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);