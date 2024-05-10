import GitHubImageB from "../layout/images/github-mark-black.png";
import LinkedInImage from "../layout/images/LinkedIn4.png";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className='contact-page'>
      <div>
        <menu className='contact-logo-bar'>
          <a
            href='https://www.linkedin.com/in/charleswbryant/'
            className='contact-sidebar-icons'
          >
            <img
              className='contact-side-img'
              src={LinkedInImage}
              alt='LinkedIn Icon'
            />
          </a>
          <a
            href='https://github.com/CBryant20'
            className='contact-sidebar-icons'
          >
            <img
              className='contact-side-img'
              src={GitHubImageB}
              alt='GitHub Icon'
            />
          </a>
          <a
            className='contact-sidebar-icons'
            href='mailto:cwbryant2025@gmail.com'
          >
            <span className='material-symbols-outlined'>mail</span>
          </a>
          <a className='contact-sidebar-icons' href='#'>
            <span className='material-symbols-outlined'>add_comment</span>
          </a>
        </menu>
      </div>

      <section className='contact'>
        <h1>Get in touch</h1>
        <p>
          Need some work done and like what you see? Send me a message and let's
          work together.
        </p>
        <div className='column'>
          <form action='https://api.web3forms.com/submit' method='POST'>
            <input
              type='hidden'
              name='access_key'
              value='b7f60ed2-4dc3-42e5-8ab4-80bdf117cda4'
            />
            <label htmlFor='fname'>First Name</label>
            <input
              className='input-box'
              type='text'
              id='fname'
              name='fname'
              placeholder='Your first name..'
              required
            />

            <label htmlFor='lname'>Last Name</label>
            <input
              className='input-box'
              type='text'
              id='lname'
              name='lname'
              placeholder='Your last name..'
              required
            />

            <label htmlFor='email'>Email</label>
            <input
              className='input-box'
              type='email'
              id='email'
              name='email'
              placeholder='Email...'
              required
            />

            <label htmlFor='message'>Message</label>
            <textarea
              className='input-box'
              id='message'
              name='message'
              placeholder='Write something or just say Hi!'
              required
            ></textarea>
            <div class='h-captcha' data-captcha='true'></div>
            <input className='input-submit' type='submit' value='Submit' />
          </form>
          {/* <script
            src='https://web3forms.com/client/script.js'
            async
            defer
          ></script> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
