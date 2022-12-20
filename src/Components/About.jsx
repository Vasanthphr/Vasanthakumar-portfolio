import "./About.css";
function About() {
  return (
    <>
      <div className="container ">
        <div>
          <h1 className="about-title mt-5">About</h1>
          <div>
            <p className="about-content">
              I Started off my self-learning journey with online tutorials
              Google, YouTube, etc and took a step further and Enrolled in the
              Fullstack web-developer Program bootcamp in <strong>GUVI IIT MADRAS</strong> which involved extensive
              programming and real world projects. In this camp I learned <strong>MERN</strong> Stack From Guvi to design and built with new features from
              Ideation to production, implementaition of wireframes and design
              flows in my web application. I take into consideration the user
              experience while writing reusable and efficlebt code I
              passionately combine Good design,Technology,and Innovation in all
              my PROJECT using <strong>React JS, Node, Express Js, MongoDB.</strong> <br />
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h1 className="about-title">Education Level</h1>
            </div>
            <div>
              <p>
                <b>Full Stack Devoloping : (2022-Present)</b>
                <br />
                GUVI - IIT Madras - Chennai.
              </p>
            </div>
            <div>
              <p>
                <b>Bachelor's in Mechanical Engineering : (2013-2017)</b>
                <br />
                Annamalai University - Chidambaram.
              </p>
            </div>
            <div>
              <p>
                <b>Higher Secondary : (2011-2013)</b>
                <br />
                st Joseph's School - Cuddalore.
              </p>
            </div>
          </div>

          <div className="col-lg-6 ">
            <div>
              <h1 className="about-title">Experience</h1>
            </div>
            <div>
              <p>
                <b>UI Design / Web developer Trained : (2022-Present)</b>
                <br />
                GUVI IIT Madras - Chennai
              </p>
            </div>
            <div>
              <p>
                <b>Outlet Manager : (2019-2021)</b>
                <br />
                Trends in Vogue - Chennai
              </p>
            </div>
            <div>
              <p>
                <b>Telecalling Executive : (2019)</b>
                <br />
                Imarque solutins - Chennai
              </p>
            </div>
            <div>
              <p>
                <b>Office Assistant : (2017-2019)</b>
                <br />
                Global Computers - Poompuhar
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
