import React, { useEffect } from "react";
import "./style.css";
import servicesData from "./servicesData";
import Snowfall from "react-snowfall";
const LandingPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(
      ".heroTitle, .featureItem, .cta-button1, .stat-description, .paragraph , .slogan"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between align-items-center p-3 fixed-top shadow-sm bg-white">
          <div className="logo fs-3">
            Level
            <span className="highlight" style={{ color: "#003366" }}>
              UP
            </span>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link text-black">
              Trang chủ
            </a>
            <a href="#case-studies" className="nav-link text-black ">
              Dịch vụ
            </a>
            <a href="#contact" className="nav-link text-black">
              Liên hệ
            </a>
          </nav>
        </div>

        <div
          className="hero text-center  d-flex flex-column justify-content-center align-items-center bg-secondary"
          id="home"
        >
          <Snowfall
            style={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
              zIndex: 0, // Đặt phía sau nội dung
            }}
            color="white" // Màu tuyết
            snowflakeCount={300} // Số lượng tuyết
          />
          <div className="title">
            <img
              src={require("../../assets/images/background.png")}
              alt="Coding Student"
              className="img-fluid"
            />
          </div>
        </div>

        <div style={{position:"relative"}}>
          <div
            className="features text-center  animate-on-scroll"
            style={{ padding: "30px 10%" }}
            id="team"
          >
            <div className="row p-3">
              <div className="container py-5">
                <div className="text-center mb-5">
                  <div className="fs-1 fw-bold slogan">
                    Why{" "}
                    <span className="highlight">
                      {" "}
                      Level
                      <span className="highlight" style={{ color: "#003366" }}>
                        UP
                      </span>
                    </span>
                  </div>
                  <div className="underline"></div>
                  <h1
                    className="fw-bold content-title "
                    style={{ color: "#0d0f4a" }}
                  >
                    Proven Coding Bootcamp Education
                  </h1>

                  <p className="text-muted mx-auto w-75">
                    We pride ourselves on delivering exceptional student
                    outcomes. We do this through a challenging curriculum,
                    industry-experienced instructors and career advisors, and a
                    robust hiring partner network.
                  </p>
                  <button
                    className="btn btn-lg"
                    style={{ backgroundColor: "#0d0f4a", color: "white" }}
                  >
                    What Sets Hack Reactor Apart
                  </button>
                </div>

                <div className="row align-items-center">
                  <div className="col-md-5 mb-4">
                    <div className="rounded shadow overflow-hidden">
                      <img
                        src={require("../../assets/images/teamwork.png")}
                        alt="Coding Student"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-md-7 about-container">
                    <div className="row g-3">
                      <div className="col-md-5 about-content d-flex m-3">
                        <div className=" bg-white w-100 d-flex flex-column">
                          <h3 className="text-color fw-bold">
                            Innovative Curriculum
                          </h3>
                          <p className="text-muted">
                            In as few as 12 weeks, our software engineering
                            bootcamp students learn in-demand coding skills and
                            are ready to launch new careers in the tech sector.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5 about-content d-flex m-3">
                        <div className=" bg-white w-100 d-flex flex-column">
                          <h3 className="text-color fw-bold">Embracing AI</h3>
                          <p className="text-muted">
                            We infuse our programs with AI tools like GitHub
                            Copilot so you're ready to thrive alongside
                            advancements in AI.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5 about-content d-flex m-3">
                        <div className="bg-white w-100 d-flex flex-column">
                          <h3 className="text-color fw-bold">
                            Supportive Community
                          </h3>
                          <p className="text-muted">
                            You'll have access to a supportive and passionate
                            community of students, instructors, staff, and
                            alumni.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5 about-content d-flex m-3">
                        <div className=" bg-white w-100 d-flex flex-column">
                          <h3 className="text-color fw-bold">
                            Career Services & Hiring Partners
                          </h3>
                          <p className="text-muted">
                            In addition to learning technical skills,{" "}
                            <span className="fw-bold">
                              our Career Services team
                            </span>{" "}
                            connects you with{" "}
                            <span className="fw-bold">hiring partners</span> who
                            are looking for job-ready software engineers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center animate-on-scroll"
            style={{
              padding: "50px 10%",
            }}
          >
            <div className="bootcamp-container py-5 text-center">
              <h2 className="bootcamp-title fw-bold mb-3">
                Find the Right Bootcamp for You
              </h2>
              <div className="underline"></div>
              <p className="bootcamp-description mb-5">
                No experience? Or ready to take your skills to the next level?
                We’ve designed our intensive coding bootcamps to serve you
                wherever you are on your learning path. Find the right program
                for you based on your skill level and schedule.
              </p>

              <div className="bootcamp-card-wrapper row justify-content-center">
                <div className="bootcamp-card-container col-md-4 mb-4">
                  <div className="bootcamp-card p-4 rounded shadow-sm h-100">
                    <img
                      src={require("../../assets/images/bootcamp.png")}
                      alt="Beginner Bootcamp"
                      className="bootcamp-icon mb-3"
                    />
                    <h5 className="bootcamp-card-title mb-2">
                      Full-Time Beginner Bootcamp ›
                    </h5>
                    <p className="bootcamp-card-description mb-0">
                      16 weeks, live online. No coding experience needed.
                    </p>
                  </div>
                </div>

                <div className="bootcamp-card-container col-md-4 mb-4">
                  <div className="bootcamp-card p-4 rounded shadow-sm h-100">
                    <img
                      src={require("../../assets/images/bootcamp.png")}
                      alt="Part-Time Bootcamp"
                      className="bootcamp-icon mb-3"
                    />
                    <h5 className="bootcamp-card-title mb-2">
                      Part-Time Beginner Bootcamp ›
                    </h5>
                    <p className="bootcamp-card-description mb-0">
                      30 weeks, live online. No coding experience needed.
                    </p>
                  </div>
                </div>

                <div className="bootcamp-card-container col-md-4 mb-4">
                  <div className="bootcamp-card p-4 rounded shadow-sm h-100">
                    <img
                      src={require("../../assets/images/bootcamp.png")}
                      alt="Intermediate Bootcamp"
                      className="bootcamp-icon mb-3"
                    />
                    <h5 className="bootcamp-card-title mb-2">
                      Full-Time Intermediate Bootcamp ›
                    </h5>
                    <p className="bootcamp-card-description mb-0">
                      12 weeks, live online. No coding experience needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center"
            style={{
              padding: "30px 10%",
              backgroundImage: `url(${require("../../assets/images/background-service.png")})`,
            }}
            id="case-studies"
          >
            <div className="services-section">
              <h2 className="services-title">SERVICES</h2>
              <div className="underline"></div>

              <div className="services-container">
                {servicesData.map((service, index) => (
                  <div key={index} className="service-card">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="service-icon"
                    />
                    <p className="service-icon-title">{service.title}</p>
                  </div>
                ))}
              </div>

              <div className="read-more-container">
                <button className="read-more-btn">Read more</button>
              </div>
            </div>
          </div>

          <div
            className="text-center"
            style={{
              margin: "30px 10%",
              padding: "6% 8%",
            }}
          >
            <h2 className="mb-4 display-6 fw-bold slogan">
              <span className="highlight">
                Level
                <span className="highlight" style={{ color: "#003366" }}>
                  UP
                </span>
              </span>
              - Bệ phóng cho sinh viên chinh phục cơ hội thực tập và việc làm mơ
              ước!
            </h2>
            <div className="cta mt-5 rounded mt-4">
              <button className="cta-button1">Liên hệ với chúng tôi</button>
            </div>
          </div>

          <div
            className="navbar"
            style={{ padding: "0 10% 50px 10%" }}
            id="contact"
          >
            <div className="d-flex gap-3">
              <a href="#home" className="nav-link ">
                Trang chủ
              </a>
              <a href="#case-studies" className="nav-link ">
                Dịch vụ
              </a>
              <a href="#contact" className="nav-link ">
                Liên hệ
              </a>
            </div>
            <div className="social-icons ">
              <a href="#">
                <img
                  src={require("../../assets/images/facebook-logo.png")}
                  className="social-icon facebook"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  src={require("../../assets/images/instagram-logo.png")}
                  className="social-icon instagram"
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <img
                  src={require("../../assets/images/tiktok-logo.png")}
                  className="social-icon tiktok"
                  alt="Tiktok"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
