import React, { useEffect, useState } from 'react'
import { FormCard } from './FormCard'
import TweetCard from './TweetCard'

const dataList = []

const Main = () => {

	const [data, setData] = useState('');
	const [parag, setParag] = useState('');


	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}

	return (
    <div style={style} className='main-wrapper'>
		<FormCard takeValue={setData} />
		{dataList}
    </div>
  );
}






export default Main
