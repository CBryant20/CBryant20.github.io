import GitHubImage from "../layout/images/github-mark-white.png";
import LinkedInImage from "../layout/images/LinkedIn4.png";

import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <aside className='side-menu-side'>
      <menu className='logo-bar-side'>
        <img
          className='profile-side-img'
          src='src/layout/images/CBprofilePic.png'
          alt='#'
        />
        <div className='sidebar-item'>
          <h4 className='sidebar-title-side'>LinkedIn Profile:</h4>
          <a
            href='https://www.linkedin.com/in/charleswbryant/'
            className='sidebar-icons-side'
          >
            <img className='side-img' src={LinkedInImage} alt='LinkedIn Icon' />
          </a>
        </div>
        <div className='sidebar-item'>
          <h4 className='sidebar-title-side'>
            Check out my Projects on GitHub:
          </h4>
          <a href='https://github.com/CBryant20' className='sidebar-icons-side'>
            <img className='side-img' src={GitHubImage} alt='GitHub Icon' />
          </a>
        </div>
        <div className='sidebar-item'>
          <h4 className='sidebar-title-side'>Contact via Email:</h4>
          <a
            className='sidebar-icons-side'
            href='mailto:cwbryant2025@gmail.com'
          >
            <span className='material-symbols-outlined'>mail</span>
          </a>
        </div>
        <div className='sidebar-item'>
          <h4 className='sidebar-title-side'>Message me on [Platform Name]:</h4>
          <a className='sidebar-icons-side' href='#'>
            <span className='material-symbols-outlined'>add_comment</span>
          </a>
        </div>
      </menu>
    </aside>
  );
}
