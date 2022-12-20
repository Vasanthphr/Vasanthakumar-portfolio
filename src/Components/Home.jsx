import "./Home.css";
import home from "../assets/home.png";

function Home() {
  return (
    <div className="row">
      <div className="col-lg-12 ">
        <div className="row">
         
          <div className="col-lg-4 ">
            <div className="intro ">
                <span>
                  <h3>Hi! I,m</h3>
                </span>
                <span>
                  <h1>Vasanthakumar G</h1>
                </span>
                <span>
                  <h5>Web-devoloper(MERN)</h5>
                </span>
            
              <div className="icon">
                <a href="https://github.com/Vasanthphr" target="blank">
                  {" "}
                  <span className="github m-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt=""
                    />
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/vasanthakumar-g-6a6009239/"
                  target="blank"
                >
                  <span className="linkedin m-2">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/linkedin-512.png"
                      alt=""
                    />
                  </span>
                </a>
              </div>
              <div class="resume">
              <div class="product">
                <div class="effect-1"></div>
                <div class="effect-2"></div>
                <div class="content">
                  <a
                    className="resume-title"
                    href="https://drive.google.com/file/d/1BXKKBTap1h_umrieCxmfMFzWikfoS0SW/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Resume{" "}
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>


          <div className="col-lg-5">
            <img
            className="home-img"
              src={home}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
