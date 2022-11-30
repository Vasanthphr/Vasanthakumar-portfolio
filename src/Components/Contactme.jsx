import "./Contactme.css";

function Contactme() {
  return (
    <>
      <div className="heading mt-3">
        <h3>Contact Me</h3>
        <p className="con-details">Get in touch</p>
      </div>

      <div className="flex-container">
        <div className="row box">
          <div className="col-lg-5">
            <div className="my-details">
              <div className="con-details-title">
                <h5>Call Me</h5>
                <p className="con-details">9092762110</p>
              </div>
              <div className="con-details-title">
                <h5>Email</h5>
                <p className="con-details">vagsanth@gmail.com</p>
              </div>
              <div className="con-details-title">
                <h5>Location</h5>
                <p className="con-details">Chennai-Tamilnadu</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-box">
            <span>
              <input type="text" className="form-control" placeholder="Name" />
            </span>
            <span>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </span>
            <span>
              <input
                type="number"
                className="form-control"
                placeholder="Phone No"
              />
            </span>
            <textarea
              className="form-control"
              placeholder="Message"
              rows="3"
              cols="30"
            ></textarea>
          </div>
          <input className="sub-btn" type="submit" />
        </div>
      </div>
    </>
  );
}

export default Contactme;
