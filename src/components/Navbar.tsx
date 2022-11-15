import React from 'react'
import logo from '../assets/logo.svg'
import openMenu from '../assets/icon-menu.svg'
import ResponsiveNavbar from './ResponsiveNavbar'
type Props = {}

const Navbar = (props: Props) => {
    const [active, setActive] = React.useState<boolean>(false);
  return (
    <nav id="navigation-bar" role="navigation">
        <img src={logo} alt="News Homepage logo" className="brand-logo"/>
        <ul id="navbar-list">
            <li className="navbar-item link-text">Home</li>
            <li className="navbar-item link-text">New</li>
            <li className="navbar-item link-text">Popular</li>
            <li className="navbar-item link-text">Trending</li>
            <li className="navbar-item link-text">Categories</li>
        </ul>
        {!active ? <img src={openMenu} className="responsive-menu-icon" onClick={() => setActive(!active)} alt="open responsive navigation icon"/> : ""}
        {active ? <ResponsiveNavbar active={active} setActive={setActive}/> : ""}
    </nav>
  )
}

export default Navbar