import React, { useEffect, useState } from 'react'
import { FormCard } from './FormCard'
import TweetCard from './TweetCard'


const Main = () => {

	const [data, setData] = useState();
	const [arr, setArr] = useState([])

	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}

	useEffect(() => {
		data && setArr([...arr, data])
	},[data])

	return (
    <div style={style} className='main-wrapper'>
		<FormCard setData={setData} dataFull={data} />
		{arr.map((item, index) => (
			<TweetCard data={item} key={index} />
		))}
    </div>
  );
}




export default Main
