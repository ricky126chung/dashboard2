import React from 'react'
import { useSelector } from 'react-redux';
import { selectCount } from '../Redux/slices/counterSlice';

function Expense() {
  const count:number = useSelector(selectCount);
  return (
    <div>Expense {count}</div>
  )
}

export default Expense