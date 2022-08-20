import React, { useState } from 'react';
import styled from 'styled-components';

export const TextareaStyled = styled.textarea`
	outline: none;
	border-color: white;
	border-radius: 5px;
	background-color: #fcf8f3;
	padding: 10px;
	font-family: sans-serif;
	color: grey;
	resize: none;

	&:focus {
		box-shadow: 1px 1px 3px 2px #92d0f0;
	}
	&:hover {
		box-shadow: 1px 1px 3px 2px #92d0f0;
	}
	/* &:active {
		background-color: black; */
	}
`

export const FormCard = ({takeValue}) => {

	const [totalChar, setTotalChar] = useState(250);
	const [inputPosition, setInputPosition] = useState(true);
	const [parag, setParag] = useState('');

	const style = {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'white',
		width: 'fit-content',
		padding: '30px 1px 10px 1px',

		/* borderStyle: 'solid',
		borderColor: '#e5ecf0',
		borderWidth: '2px', */
		border : '2px solid #e5ecf0'
	}

	const textDiv = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'center',
		margin: '0 20px 0 0',
	}
	
	const buttonDiv = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}

	const button = {
		backgroundColor: `${inputPosition ? '#92d0f0' : '#1da1f1'}`,
		border: 'none',
		color: 'white',
		padding: '10px 10px',
		borderRadius: '5px',
	}

	const handleInput = (e) => {
		setTotalChar(250 - e.target.value.length);
		setParag(e.target.value);
		if (e.target.value.length === 0 || e.target.value.length > 250)
			setInputPosition(true);
		else
			setInputPosition(false);
	}

	const handleAddClick = (e) => {
		const data = {
      name: "isimsiz",
      nick: "isimsiz",
      paragraph: parag,
      date: "2022",
    };
		takeValue(data);
		e.preventDefault();
	}

	return (
    <form style={style}>
      <div style={textDiv}>
        <TextareaStyled
          placeholder="Tweet about 30 Days of React ..."
          rows="4"
          cols="50"
          onChange={handleInput}
        ></TextareaStyled>
        <p
          style={{
            color: "#21a2f2",
            padding: "10px 0 0 0",
            fontSize: "13px",
          }}
        >
          {totalChar}
        </p>
      </div>
      <div style={buttonDiv}>
        <button style={button}
		type='submit'
		onClick={handleAddClick}
		disabled={inputPosition}>
          Add Post
        </button>
      </div>
    </form>
  );
}

