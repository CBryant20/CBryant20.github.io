import { NavLink } from "react-router-dom";

export default function DropdownMenu({ setOpen }) {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <ul className='dropdown-menu'>
          <li className='menu-item'>
            <NavLink to='/' onClick={handleClick} style={{ color: "#deb992" }}>
              HOME
            </NavLink>
          </li>
          <li className='menu-item'>
            <NavLink
              to='/work'
              onClick={handleClick}
              style={{ color: "#deb992" }}
            >
              WORK
            </NavLink>
          </li>
          <li className='menu-item'>
            <NavLink
              to='/about'
              onClick={handleClick}
              style={{ color: "#deb992" }}
            >
              ABOUT
            </NavLink>
          </li>
          <li className='menu-item'>
            <NavLink
              to='/contact'
              onClick={handleClick}
              style={{ color: "#deb992" }}
            >
              CONTACT
            </NavLink>
          </li>
          <menu className='logo-bar'>
            <a
              href='https://www.linkedin.com/in/charleswbryant/'
              className='sidebar-icons'
            >
              <img src='src/layout/images/LinkedIn4.png' alt='GitHub Icon' />
            </a>
            <a href='https://github.com/CBryant20' className='sidebar-icons'>
              <img
                src='src/layout/images/github-mark-white.png'
                alt='GitHub Icon'
              />
            </a>
            <a className='sidebar-icons' href='mailto:cwbryant2025@gmail.com'>
              <span className='material-symbols-outlined'>mail</span>
            </a>
            <a className='sidebar-icons' href='#'>
              <span className='material-symbols-outlined'>add_comment</span>
            </a>
          </menu>
        </ul>
      </div>
    </>
  );
}
