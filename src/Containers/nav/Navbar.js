import React from 'react'
import nav from './Navbar.module.css'
function Navbar() {
    function clearAll() {

        localStorage.removeItem("data")
    }
  return (
    <div className={nav.main} >
      <div className={nav.title}>KAN-BAN</div>
      <div>
        <div className={
            nav.clear
        }>
            <p onClick={clearAll}>Clear All</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
