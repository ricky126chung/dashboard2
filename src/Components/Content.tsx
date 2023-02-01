import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {increment, selectCount} from '../Redux/slices/counterSlice';
import { ThemeContext } from './Header';

function Content() {
  const count:number = useSelector(selectCount);
  const dispatch = useDispatch();
  const click=() =>{
    return (dispatch(increment())) 
  }
  const darkTheme = useContext(ThemeContext)
  return (
    <div className={`${darkTheme}`}>
      <div>Number: {count}</div>
      <button onClick={click} className="btn btn-light">Add 1</button>
    </div>
  )
}

export default Content