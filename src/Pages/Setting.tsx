import React, { useContext, useEffect, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { ThemeContext } from '../Layout/PageStart';
import {onBar,offBar,  onTable, offTable } from '../Redux/slices/SISlice';


function Setting() {
  const sbStatus = useSelector((state:any) => state.stockItem.stockBar )
  const stStatus = useSelector((state:any) => state.stockItem.stockTable )
  const sb = useRef<HTMLInputElement>(null)
  const st = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const theme = useContext(ThemeContext)
  useEffect(()=>{
    if(sb.current!=null)
    {
      sb.current.checked = sbStatus
    }
    if(st.current!=null)
    {
      st.current.checked = stStatus
    }
  },[])
  const sbChange= () =>{
    if(sb.current!=null){
      if(sb.current.checked)
      {
        dispatch(onBar())
      }
      else{
        dispatch(offBar())
      }
    }
  }
  const stChange = () =>{
    if(st.current!=null){
      if(st.current.checked)
      {
        dispatch(onTable())
      }
      else{
        dispatch(offTable())
      }
    }
    console.log(stStatus)
  }
  return (
    <div className='container-md w-50'>
      <div className={`${theme} block p-5 rounded-5`}>
        <div className='row justify-content-sm-center'>
          <h5 className='col-sm-3 text-end'>Stock display: </h5>
          <div className='col-sm-2 '>
            <div className="form-check d-flex justify-content-center">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={sb} onChange= {sbChange}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                StockBar
              </label>
            </div>
          </div>
          <div className='col-sm-2 '>
            <div className="form-check d-flex justify-content-center">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={st} onChange= {stChange}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                StockTable
              </label>
            </div>
          </div>
        </div>
        <div className='row justify-content-sm-center'>
          <h5 className='col-sm-3 text-end'>Dollar sign: </h5>
          <div className='col-sm-4 '>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dollar
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item active" href="#">Dollar</a></li>
              <li>HKD</li>
              <li>USD</li>
              <li>BTC</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting