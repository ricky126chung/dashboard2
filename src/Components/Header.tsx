import React, { useState, useEffect } from 'react'
import {BsFillSunFill,BsMoon} from  'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import Content from './Content'
import Nav from '../Nav/Nav'

export const ThemeContext = React.createContext("default")
function Header() {
  const [switchDarkTheme,setSwitchDarkTheme] = useState(false) //default is light theme
  const [theme,setThemeClass] =useState('light')
  const [slideNav, setSlideNav] = useState(false)
  const switchTheme = () =>{
    switchDarkTheme?setSwitchDarkTheme(false):setSwitchDarkTheme(true)
    switchDarkTheme?setThemeClass('light'):setThemeClass('dark')
  }
  useEffect(() => {
    document.body.className=theme
  }, [theme]);
  return (
    <div>
      <div className={`container-fluid pt-2 d-flex justify-content-between border-bottom border-4 border-secondary-1 bar ${theme}`}>
        <div className='pt-1 ps-3'>
          <AiOutlineMenu className='cursor-pointer menuIcon'/>
        </div>
        <a href='#'><h2 className=''>Dashboard</h2></a>
        <div className='pt-1 pe-3'>
          {switchDarkTheme?<BsMoon className='cursor-pointer' onClick={switchTheme}></BsMoon>:<BsFillSunFill className='cursor-pointer' onClick={switchTheme}></BsFillSunFill>}
        </div>
      </div>
      <ThemeContext.Provider value={theme}>
        <div className='row'>
          <div className='col-sm-3'>
            <Nav slide={slideNav}/>
          </div>
          <div className='col-sm-9'>
            <Content />
          </div>
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default Header