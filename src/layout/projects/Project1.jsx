import { Link } from "react-router-dom";

import "./Projects.scss";

export default function Project1() {
  return (
    <>
      <body className='main-project'>
        <header className='back-button'>
          <Link to='/work'>BACK</Link>
        </header>
        <main className='projects'>
          <section className='image-link'>
            <div className='project-title'>
              <h1>Workout App</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto aliquid quae assumenda qui sequi nulla sit quidem at
                vero alias dolor, est commodi consequatur, tempore ex nobis
                provident quaerat odit?
              </p>
            </div>
            <a className='project-link' href='#'>
              <img alt='photo goes here / add a src' />
            </a>
          </section>
        </main>
      </body>
    </>
  );
}
