import Aboutimg from "../assets/concept-construction-page-site.jpg";
import "./About.css";
function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 m-5">
            <div className="row">
              {" "}
              <h1>About</h1>
              <div>
                <p>
                  I'm a full stack web developer and desinging new features from
                  Ideation to production, implementaition of wireframes and
                  design flows in my web application. I take into consideration
                  the user experience while writing reusable and efficlebt code
                  I passionately combine Good design,Technology,and Innovation
                  in all my PROJECT
                </p>

                <div>
                  <h1>Education Level</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 m-5">
            <img
              src={Aboutimg}
              style={{ width: "40rem", height: "25rem" }}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
