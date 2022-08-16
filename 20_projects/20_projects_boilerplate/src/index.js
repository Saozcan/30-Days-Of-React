import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import styled from 'styled-components'


const averaheValue = (values) => {


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

const TestStyle = styled.span`
font-size: 1.5rem;
color: #61dbfb;
`

const HoverStyle = styled.div`
	box-shadow: 0 0px 10px 5px #000f0f;

	&:hover {
		box-shadow: 0 0px 5px 5px #0f0f0f;
	}
`

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


		return (
			<div className='header-wrapper'>
				<div style={style}>
					<h1>30 DAYS OF REACT</h1>
				</div>
				<div style={catDetails}>
					<h2>Cats Paradise</h2>
					<h2>There are <span>{averageValues.total}</span> cat breeds</h2>
					<p>On average a cat can <TestStyle><span>{averageValues.metric}</span></TestStyle> weight about 
						<TestStyle><span> {averageValues.life}</span></TestStyle>
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
      <HoverStyle>
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
      </HoverStyle>
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

	const catDataLists = datas.map((element, index) => <CatCard key={index} data={element}/>)

	return (
		<div style={style}>
			{catDataLists}
		</div>
	)
}

const FiltreComp = ({oneData, changeData}) => {

	const {
		origin,
		number,
	} = oneData;

	const style = {
		width: 'fit-content',
		height: '2rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '10px 15px',
		borderStyle: 'solid',
		borderWidth: '1px',
		borderColor: '#80808063',
		fontWeight: 'bold',
		margin: '0.2rem',
		cursor: 'pointer',
	}

	return (
		<div style={style} onClick={changeData(origin)}>
			{origin.toUpperCase()}({number})
		</div>
	)
}

const FiltreComps = ({filtreData, clickChangeData}) => {

	
	const filtreDataFirstList = filtreData.filter((element) => element.number > 0)
	const filtreDataList = filtreDataFirstList.map((element, index) => 
	<FiltreComp oneData={element} key={index} changeData={clickChangeData} />);

	const style = {
		display: 'flex',
		flexWrap: 'wrap',
	}

	return (
		<div style={style}>
			{filtreDataList}
		</div>
	)
}

class Main extends React.Component {

	render () {
		return (
			<div className='main-wrapper'>
				<FiltreComps filtreData={this.props.filtreData} 
				clickChangeData={this.props.clickChangeData} />
				<CatCards datas={this.props.datas} />
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
	data: undefined,
	metric: undefined,
	filtreData: undefined,
	noChangeData: undefined,
	noChangeDataCheck: 0,
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
		const catNumbersOfCountry = []
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

					const countryName = {
						origin,
						number: 0,
					}
					catNumbersOfCountry.push(countryName);
				}
			if (weight && life_span) {
				const newDataWeightLife = {
					weight,
					life_span,
				}
				catWeightLife.push(newDataWeightLife);
			}


		})

		data.map((element) => {
			const index = catNumbersOfCountry.findIndex((elementIn) => element.origin === elementIn.origin)
			catNumbersOfCountry[index].number += 1;
		})

		catNumbersOfCountry.sort((a, b) => b.number - a.number)

		this.setState({data: catData});
		this.setState({metric: catWeightLife});
		this.setState({filtreData: catNumbersOfCountry})
		if (this.state.noChangeDataCheck === 0) {
			this.setState({noChangeData: catData});
			this.setState({noChangeDataCheck: 1});
		}
	}
	catch(error) {
		console.log(error);
	}
}

	changeFilterValue = (parameter) =>  (e) => {
		const newData = this.state.noChangeData.filter((element) => 
			element.origin.toUpperCase() === parameter.toUpperCase())
		this.setState({data: newData});
	}

	render () {
		return (
			this.state.metric &&
			this.state.filtreData &&
			this.state.data ?
			<div className='App'>
				<Header data={this.state.metric}/>
				<Main 
				datas={this.state.data}
				filtreData={this.state.filtreData}
				clickChangeData={this.changeFilterValue}
				/>
				{/* <Footer /> */}
			</div>
			:
			<div>bekliyor</div>
		)
	}
}



const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);