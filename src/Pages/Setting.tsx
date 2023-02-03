import React, { useEffect, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {onBar,offBar,  onTable, offTable } from '../Redux/slices/SISlice';


function Setting() {
  const sbStatus = useSelector((state:any) => state.stockItem.stockBar )
  const stStatus = useSelector((state:any) => state.stockItem.stockTable )
  const sb = useRef<HTMLInputElement>(null)
  const st = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
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
  const nsbChange= () =>{
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
  const nstChange = () =>{
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
    <div className='container-sm'>
      <div className='row justify-content-sm-center'>
        <div className='col-sm-3 '>
          <div className="form-check d-flex justify-content-center">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={sb} onChange= {nsbChange}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              StockBar
            </label>
          </div>
        </div>
        <div className='col-sm-3 '>
          <div className="form-check d-flex justify-content-center">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={st} onChange= {nstChange}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              StockTable
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting