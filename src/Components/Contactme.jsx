import "./Contactme.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1zl2mh",
        "template_9ixm0ln",
        form.current,
        "ap47aysBPjMIimfBF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="cont">
      <div className="cont-all mt-5">
        <div className="container login-container ">
          <div className="row login-row ">
            <h2 className="section__title CONT-titel">Contact Me</h2>
            <p className="CONT-titel2">Get in touch</p>
            <br />
            <br />

            <div className="container ">
              <div className="row  ">
                <div className="col  log-cont">
                  <div className="contact__information">
                    <i className="uil uil-phone contact__icon"></i>
                    <div>
                      <h3 className="contact__title">Call Me</h3>
                      <span className="contact__subtitle">90927-62110</span>
                    </div>
                  </div>

                  <div className="contact__information">
                    <i className="uil uil-envelope contact__icon"></i>
                    <div>
                      <h3 className="contact__title">Email</h3>
                      <span className="contact__subtitle">
                        vagsanth@gmail.com
                      </span>
                    </div>
                  </div>

                  <div className="contact__information">
                    <i className="uil uil-map-marker contact__icon"></i>
                    <div>
                      <h3 className="contact__title">Location</h3>
                      <span className="contact__subtitle">
                        Poompuhar-Tamilnadu
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className=" col login-form">
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="contact__form grid"
                    >
                      <div className="contact__inputs grid">
                        <div className="contact__content">
                          <input
                            type="text"
                            name="name"
                            className="contact__input"
                            required
                            placeholder="Name"
                          />
                        </div>
                        <div className="contact__content">
                          <input
                            type="email"
                            name="email"
                            className="contact__input"
                            required
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="contact__content">
                        <input
                          type="number"
                          name="number"
                          className="contact__input"
                          required
                          placeholder="Phone number"
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          id=""
                          cols="0"
                          rows=""
                          className="contact__input contanct-massg"
                          required
                          placeholder="Message"
                        ></textarea>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="button glow-on-hover cont-bn"
                        >
                          Send Message
                          <i className="uil uil-message button__icon"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
