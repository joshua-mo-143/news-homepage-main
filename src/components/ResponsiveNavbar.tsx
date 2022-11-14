import React, { Dispatch, SetStateAction } from 'react'
import closeMenu from '../assets/icon-menu-close.svg'

type Props = {
    active: Boolean;
    setActive: Dispatch<SetStateAction<boolean>>
}

const ResponsiveNavbar = ({active, setActive}: Props) => {
  return (
    <div className="responsive-navbar-wrapper">
        <nav className='responsive-navbar'>
        <div className="responsive-navbar-menu">
        <img src={closeMenu} onClick={() => setActive(!active)}/>
        <ul id="responsive-navbar-list">
            <li className="navbar-item link-text">Home</li>
            <li className="navbar-item link-text">New</li>
            <li className="navbar-item link-text">Popular</li>
            <li className="navbar-item link-text">Trending</li>
            <li className="navbar-item link-text">Categories</li>
        </ul>
        </div>
    </nav>
    </div>
  )
}

export default ResponsiveNavbar