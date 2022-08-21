import React, { useEffect, useState } from 'react'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import { TextareaStyled } from './FormCard'

const TweetCard = ({data}) => {

	const [position, setPosition] = useState(true);
	const [parag, setParag] = useState('');
	const [beforeChange, setBeforeChange] = useState('');
	const [del, setDel] = useState(true);

	const {
		name,
		nick,
		paragraph,
		date,
	} = data;


	const style = {
		backgroundColor: 'white',
		width: '30.5rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		border: '1px solid #e5ecf0',
	}
	const topDiv = {
		display: 'flex',
		alignItems: 'center',
		margin: '3px 5px 0 5px',
	}
	const midDiv = {
		margin: '5px 6px',
		backgroundColor: 'white',
	}
	const bottomDiv = {
		display: 'flex',
		justifyContent: 'space-around',
		marginBottom: '5px',
	}

	useEffect(() => {
		setParag(paragraph);
		setBeforeChange(paragraph);
		/* eslint-disable-next-line */
	}, []);

	const handleOnClick = () => {
		setPosition(!position);
		setParag(beforeChange);
	}

	const handleOnChange = (e) => {
		setBeforeChange(e.target.value)
	}
	const handleCancelClick = () => {
		setPosition(!position);
	}
	const handleDel = () => {
		setDel(!del);
	}


	return del ? (
    position ? (
      <div style={style}>
        <div style={topDiv}>
          <div style={{ margin: "0 3px", fontSize: "20px" }}>
            <CgProfile />
          </div>
          <div style={{ margin: "0 3px", fontWeight: "bold" }}>{name}</div>
          <div style={{ margin: "0 3px", fontSize: "13px" }}>@{nick}</div>
        </div>
        <div style={midDiv}>
          <p style={{wordWrap: 'break-word'}}>{parag}</p>
        </div>
        <div style={bottomDiv}>
          <div style={{ display: "flex", color: "#92d0f0" }}>
            <div
              onClick={handleOnClick}
              className="onMouseOverForIcons"
              style={{ marginRight: "10px" }}
            >
              <HiOutlinePencilAlt />
            </div>
            <div onClick={handleDel} className="onMouseOverForIcons">
              <RiDeleteBin6Line />
            </div>
          </div>
          <div
            style={{
              color: "#92d0f0",
              display: "flex",
            }}
          >
            <div className="onMouseOverForIcons" style={{ margin: "0 5px" }}>
              <FaRegComment />
            </div>
            <div className="onMouseOverForIcons" style={{ margin: "0 5px" }}>
              <AiOutlineHeart />
            </div>
            <div className="onMouseOverForIcons" style={{ margin: "0 5px" }}>
              <AiOutlineRetweet />
            </div>
          </div>
          <div>{date}</div>
        </div>
      </div>
    ) : (
      <div
        style={{
          padding: "20px 0px 15px 0px",
          border: "2px solid #e5ecf0",
        }}
      >
        <form>
          <TextareaStyled
            onChange={handleOnChange}
            defaultValue={parag}
            style={{ width: "30.5rem" }}
          ></TextareaStyled>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <button
              onClick={handleOnClick}
			  type="button"
              style={{
                color: "white",
                backgroundColor: "#1da1f1",
                border: "none",
                padding: "5px 10px",
                borderRadius: "3px",
                marginBottom: "5px",
              }}
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
			  type="button"
              style={{
                color: "white",
                backgroundColor: "grey",
                border: "none",
                padding: "5px",
                borderRadius: "3px",
                marginBottom: "5px",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  ) : (
    <></>
  );
}

export default TweetCard;