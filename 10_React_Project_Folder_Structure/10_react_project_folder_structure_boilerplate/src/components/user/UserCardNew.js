import React from 'react'




//New User card
const UserCardNew = ({user}) => {

	const { firstName, lastName, image, techs, alt} = user;
	const techList = techs.map((element, index) => <li key={index}>{element}</li>)
	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: 'lightblue',
		color: 'white',
		width: '20rem',
		padding: '2% 0'
	}
	const imgDiv = {
		margin: '10px 0',
		display: 'flex',
		justifyContent: 'center',
	}
	const imgStyle = {
		borderRadius: '50rem',
		width: '45%',
	}
	const userName = {
		margin: '10px 0',
		fontWeight: '500'
	}
	const detailsList = {

	}
	const luStyle = {
		listStyle: 'none',
	}
	const listBigDiv = {
		width: '50%',
	}
	const h2Style = {
		display: 'flex',
		justifyContent: 'center',
	}
	return (
    <div style={style}>
      <div style={imgDiv}>
        <img style={imgStyle} src={image} alt={alt}></img>
      </div>
      <div style={userName}>
        <span>{firstName} </span>
        <span>{lastName}</span>
      </div>
      <div style={listBigDiv}>
        <div style={detailsList}>
			<h2 style={h2Style}>
				Skills
			</h2>
          <lu style={luStyle}>{techList}</lu>
        </div>
      </div>
    </div>
  );
}


export default UserCardNew