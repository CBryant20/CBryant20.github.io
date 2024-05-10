import { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./Dropdownmenu";

import "./Navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className='top-container'>
        <section>
          <a className='first-logo'>CHARLES</a>
          <a className='last-logo'>Bryant</a>
        </section>
        <div className='navbar-large-screen'>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/work'>WORK</NavLink>
          <NavLink to='/about'>ABOUT</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
        <div className='menu-toggle'>
          <a
            href='#'
            className='material-symbols-outlined'
            onClick={() => setOpen(!open)}
          >
            menu
          </a>
          {open && <DropdownMenu setOpen={setOpen} />}
        </div>
      </div>
    </nav>
  );
}
