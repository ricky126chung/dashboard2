import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {increment, selectCount} from '../Redux/slices/counterSlice';
import { ThemeContext } from '../Layout/PageStart';

function Home() {
    const count:number = useSelector(selectCount);
    const nsbStatus:boolean = useSelector((state:any) => state.stockItem.stockBar )
    const dispatch = useDispatch();
    const click=() =>{
        return (dispatch(increment())) 
    }
    const theme = useContext(ThemeContext)
    return (
        <div className={`${theme}`}>
            {nsbStatus?
            <div className={`pt-2 d-flex justify-content-between border-bottom border-4 border-secondary-1 bar ${theme}`}>
                <div className='col-12 d-flex scroll justify-content-around'>
                    <p className='fw-bold text-danger'>HSI : 22442 (-2.56%)</p>
                    <p className='fw-bold text-success'>AAPL : 150.82 (+1.36%)</p>
                    <p className='fw-bold text-danger'>DOJ : 34054 (-1.56%)</p>
                    <p className='fw-bold text-light'>NKE : 129.06 (0.00%)</p>
                    <p className='fw-bold text-success'>TSLA : 175.02 (+1.26%)</p>
                </div>
                <div className='col-12 d-flex scroll2 justify-content-around'>
                    <p className='fw-bold text-danger'>HSI : 22442 (-2.56%)</p>
                    <p className='fw-bold text-success'>AAPL : 150.82 (+1.36%)</p>
                    <p className='fw-bold text-danger'>DOJ : 34054 (-1.56%)</p>
                    <p className='fw-bold text-light'>NKE : 129.06 (0.00%)</p>
                    <p className='fw-bold text-success'>TSLA : 175.02 (+1.26%)</p>
                </div>
            </div>:""}
            <div>Number: {count}</div>
            <button onClick={click} className="btn btn-light">Add 1</button>
        </div>
    
    )
}

export default Home