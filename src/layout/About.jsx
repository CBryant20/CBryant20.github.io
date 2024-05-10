import Pic from "./images/CBprofilePic.png";

import "./About.scss";

export default function About() {
  return (
    <>
      <section className='about-container'>
        <h1>ABOUT</h1>
        <div className='text-pic-wrapper'>
          <div className='text-wrapper'>
            <p className='para'>
              Hey there! I'm Charles Bryant, a creative professional deeply
              passionate about both design and development. My journey into the
              digital realm began in architecture, where I learned to blend
              creativity with structure to craft innovative designs.
              Transitioning into animation, I refined my skills to bring those
              designs to life with fluid movement and compelling visual
              narratives.
            </p>
            <p className='para'>
              Graduating from Long Beach State with a Bachelor of Arts degree in
              animation, I've cultivated a diverse skill set. Proficient in
              tools like CAD, Adobe Creative Suite (Illustrator, Photoshop,
              After Effects), and 3D modeling software such as 3D Stu dioMAX and
              MAYA, I've explored various mediums to express my creativity. I've
              even ventured into building 4-dimensional models, pushing the
              boundaries of traditional design.
            </p>
          </div>
          <img className='about-image' src={Pic} alt='picture' />
        </div>
        <div className='text-pic-wrapper'>
          <div className='text-wrapper'>
            <p className='para'>
              In the realm of web development, I excel in JavaScript, CSS, HTML,
              React, Node, Express, and Flutter. I thrive on the dynamic nature
              of web technologies, constantly expanding my knowledge and skill
              set to stay ahead of the curve.
            </p>
            <p className='para'>
              What distinguishes me is not just my technical proficiency, but
              also my dedication to organization and collaboration. I approach
              every project with meticulous attention to detail, ensuring both
              my workspace and tasks are optimized for maximum efficiency.
              Whether working independently or as part of a team, I'm committed
              to delivering results that surpass expectations.
            </p>
            {/* <p>
          I believe in the power of continuous learning, always eager to educate
          myself on new techniques and technologies. When faced with challenges,
          I'm proactive in seeking guidance and asking questions, driven by a
          determination to overcome obstacles and deliver top-quality work.
        </p>
        <p>
          I'm enthusiastic about leveraging my diverse background and skills to
          help bring your digital vision to life. Let's collaborate and create
          something extraordinary together!
        </p> */}
            <p className='para'>
              Feel free to reach out to me at Charleswilliambryant@gmail.com to
              discuss your project or simply connect. I'm always ready to embark
              on new creative adventures.
            </p>
          </div>
          <img className='about-image' src={Pic} alt='picture' />
        </div>
      </section>
    </>
  );
}
