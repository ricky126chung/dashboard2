import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {increment, selectCount} from '../Redux/slices/counterSlice';
import { ThemeContext } from './PageStart';
import {
  Route,
  Routes
} from 'react-router-dom';
import Home from '../Pages/Home';
import Expense from '../Pages/Expense';
import Setting from '../Pages/Setting';
function Content() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Expense' element={<Expense />} />
        <Route path='/Setting' element={<Setting />} />
        <Route path="/Exit" />
      </Routes>
    </div>
  )
}

export default Content