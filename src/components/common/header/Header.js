import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { NavLink } from "react-router-dom"
const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
         
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <NavLink to={`${list.path}`}>{list.text}</NavLink>
                </li>
              ))}
             
            </ul>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header