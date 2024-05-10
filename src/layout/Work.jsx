import { Link } from "react-router-dom";

import "./Work.scss";

export default function Work() {
  return (
    <>
      <section className='work'>
        <h1>Work</h1>
        <div className='work-list'>
          <div className='work-list-item'>
            <Link to='/work/project1'>Workout App</Link>
            <p>Picture goes here</p>
          </div>
          <div className='work-list-item'>
            <Link to='/work/project2'>Whats Trending</Link>
            <p>Picture goes here</p>
          </div>
          <div className='work-list-item'>
            <Link to='/work/project3'>Book Buddy</Link>
            <p>Picture goes here</p>
          </div>
        </div>
      </section>
    </>
  );
}
