import React, { useContext } from 'react'
import { ThemeContext } from '../Layout/PageStart'
import {
    NavLink,
    useLocation 
  } from 'react-router-dom';
function Nav() {
    const darkTheme = useContext(ThemeContext)
    const currentRoute:string = useLocation().pathname;
  return (
    <div className={`vw-25 ${darkTheme}`}>
        <div className="list-group">
            <NavLink to="/"><li className={(currentRoute=="/")?'list-group-item list-group-item-action fw-bold active':'list-group-item list-group-item-action'}>Home</li></NavLink>
            <NavLink to="/Expense"><li className={(currentRoute=="/Expense")?'list-group-item list-group-item-action fw-bold active':'list-group-item list-group-item-action'}>Expense</li></NavLink>
            <NavLink to="/Stock"><li className={(currentRoute=="/Stock")?'list-group-item list-group-item-action fw-bold active':'list-group-item list-group-item-action'}>Stock</li></NavLink>
            <NavLink to="/Setting"><li className={(currentRoute=="/Setting")?'list-group-item list-group-item-action fw-bold active':'list-group-item list-group-item-action'}>Setting</li></NavLink>
            <NavLink to="/Exit"><li className={(currentRoute=="/Exit")?'list-group-item list-group-item-action fw-bold active':'list-group-item list-group-item-action'}>Exit</li></NavLink>
        </div>
    </div>
  )
}

export default Nav