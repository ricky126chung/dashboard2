import React, { useState, useEffect, useRef } from 'react'
import {BsFillSunFill,BsMoon} from  'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import Content from './Content'
import Nav from '../Nav/Nav'

export const ThemeContext = React.createContext("default")
function PageStart() {
  const [switchDarkTheme,setSwitchDarkTheme] = useState(true) //default is dark theme
  const [theme,setThemeClass] =useState('dark') // default is dark theme (dark||light)
  const [slideNav, setSlideNav] = useState(false)
  const [firstRender, setFirstRender] = useState(true)
  
  const switchTheme = () =>{
    switchDarkTheme?setSwitchDarkTheme(false):setSwitchDarkTheme(true)
    switchDarkTheme?setThemeClass('light'):setThemeClass('dark')
  }
  const slideIn = () =>{
    setSlideNav(true)
  }
  const slideOut = () =>{
    setSlideNav(false)
    setFirstRender(false)
  }
  useEffect(() => {
    document.body.className=theme
  }, [theme,slideNav]);
  return (
    <div>
      <div className={`container-fluid pt-2 d-flex justify-content-between border-bottom border-2 border-secondary-1 bar ${theme}`}>
        <div className='pt-1 ps-3'>
          <AiOutlineMenu className='cursor-pointer menuIcon' onMouseEnter={slideIn}/>
        </div>
        <a href='#'><h2 className=''>Dashboard</h2></a>
        <div className='pt-1 pe-3'>
          {switchDarkTheme?<BsMoon className='cursor-pointer' onClick={switchTheme}></BsMoon>:<BsFillSunFill className='cursor-pointer' onClick={switchTheme}></BsFillSunFill>}
        </div>
      </div>
      <ThemeContext.Provider value={theme}>
        <div className={slideNav?'position-absolute slide col-sm-3': firstRender?'position-absolute hidden col-sm-3':'position-absolute slideBack col-sm-3'} onMouseEnter={slideIn} onMouseLeave={slideOut} onClick={slideOut}>
        <Nav  />
        </div>
        <div className=''>
          <Content />
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default PageStart