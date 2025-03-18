import '../Components/Portfolio.css';
import { useEffect, useState } from "react";
import { API_URL } from "../API_URL";
import Design from '../assets/Images/thumb.png';
import Cert from '../assets/Images/cert.jpg';
import Linkedin from '../assets/Images/linkedin.svg';
import Mail from '../assets/Images/mail.svg';
import Whatsapp from '../assets/Images/whatsapp.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import profileimage from '../assets/Images/profileimage.jpg';
import triangle from '../assets/Images/293631_triangle_left_icon.png';
import righttriangle from '../assets/Images/2203515_media_music_play_triangle_icon.png';
import resume from '../assets/Images/Deva_S_Resume.pdf';
// import { FaBars, FaTimes } from "react-icons/fa";


export function Portfolio() {

  const Navigation = useNavigate();
  // const Cert1 = useNavigate();
  // const Cert2 = useNavigate();
  // const Cert3 = useNavigate();
  const [Data, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  // const handleDownload = () => {
  //   // Create an anchor element dynamically
  //   const link = document.createElement("a");
  //   link.href = "..assets/Deva.pdf"; // Path to the PDF file
  //   link.download = "Deva.pdf"; // Suggested filename for download
  //   link.click(); // Trigger a click event on the anchor element
  // };


  const handleChange = (event: any) => {
    setData((prevent: any) => ({
      ...prevent,
      [event.target.name]: event.target.value,
    }));
  };

  const PostData = async () => {
    await axios.post(API_URL, Data);
    console.log(Data);
    Navigation("/submit");
  };

  // const CertImg1 = () => {
  //   Cert1("/cert1");
  // }

  // const CertImg2 = () => {
  //   Cert2("/cert2");
  // }

  // const CertImg3 = () => {
  //   Cert3("/cert3");
  // }
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  useEffect(() => {
  }, []);

  return (
    <>

      <section className="Navbar">
        <div className='head-profile'>Jude's <br className="Break"></br>Portfolio</div>
        <div className="nav">
          <div className='nav-txt'><a href='#About'>About</a></div>
          <div className='nav-txt'><a href='#Skills'>Skills</a></div>
          <div className='nav-txt'><a href='#Project'>Project</a></div>
          <div className='nav-txt'><a href='#Certificate'>Certificates</a></div>
          <div className='nav-txt'><a href='#Contact'>Contact</a></div>
        </div>
      </section>
      <section className="profile">
        <div className="profile-img-main">
          <div className="profile-img">
            <img src={profileimage}></img>
          </div>
        </div>
        <div className="Profile-txt-main">
          <div className="Profile-txt-one">Hello, I'm</div>
          <div className="Profile-txt-two">Alex Jude</div>
          <div className="Profile-txt-three">Data Analyst</div>
          <a className="Profile-txt-btn" href={resume}>Download Resume</a>
          {/* <button  className="Profile-txt-btn">Download Resume</button> */}
          {/* <Button className="Profile-txt-btn" href={resume} >Download Resume</Button> */}
        </div>
      </section><br></br>
      <section id='Skills'>
        <div>
          <div className="sub-head">Explore My</div>
          <h1 className="head">Skills</h1><br></br>
          <div className="btn-main">
            <div className="btn-one"> <div className="btn">EXCEL</div> <div className="btn">POWER BI</div> <div className="btn">SQL</div> <div className="btn">PYTHON</div> <div className="btn">PROBLEM-SOLVING</div><div className="btn">COMMUNICATION</div></div><br></br>
            <div className="btn-two"><div className="btn">ATTENTION TO DETAIL</div> <div className="btn">ANALYTICAL THINKING</div>  <div className="btn">POWER POINT</div>     <div className="btn">STORY TELLING</div></div>
          </div>
        </div>
      </section><br></br>
      <section id="About">
        <div className="sub-head">Get To Know More</div>
        <h1 className="head">About Me</h1><br></br>
        <div className="education">
          <div className="education-card">
            <div className="education-txt">Education</div>
            <div className="education-qualification">Bachelor of Science</div>
            <div className="univercity">VIT University, Vellore</div>
            <div className="year">2020 - 2023</div>
          </div>
        </div>
      </section><br></br>
      <section>
        <div className="head">Experience</div>
        <div className="card-exp-grid">
          <div className="card-exp-one">
            <div className="card-exp-row">
              <div>
                <div className="exp-card-note">
                  <div className="class">Deloitte</div><br></br>
                  <div className="department">Data Integrity & Reporting Analyst<br></br></div>
                  <div className="date">Jun 2024 - Present</div>
                </div>
                <div className="exp-img-main">
                  <img className="exp-img-one" src={righttriangle}></img>
                </div>
              </div>
              <div>
                <div className="exp-card-note-three">
                  <div className="class">Deloitte</div><br></br>
                  <div className="department">Data Integrity & Reporting Analyst<br></br></div>
                  <div className="date">Jun 2024 - Present</div>
                </div>
                <div className="exp-img-main">
                  <img className="exp-img-one" src={righttriangle}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="card-exp"></div>
          <div>
            <div className="card-exp-two">
              <div className="card-exp-row-left">
                <div>
                  <div className="exp-img-main">
                    <img className="exp-img" src={triangle}></img>
                  </div>
                  <div className="exp-card-note-left-one">
                    <div className="class">Deloitte</div><br></br>
                    <div className="department">Data Integrity & Reporting Analyst<br></br></div>
                    <div className="date">Jun 2024 - Present</div>
                  </div>
                </div>
                <div>
                  <div className="exp-img-main">
                    <img className="exp-img-two" src={triangle}></img>
                  </div>
                  <div className="exp-card-note-left-two">
                    <div className="class">Deloitte</div><br></br>
                    <div className="department">Data Integrity & Reporting Analyst<br></br></div>
                    <div className="date">Jun 2024 - Present</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='project' id='Project'>
        <div className='project-head'>
          <p>Browse My Recent</p>
          <h1>Projects</h1>
        </div>

        <div className='project-card'>
          <div className='project-body1'>
            <img src={Design}></img>
            <h1>Data Analysis</h1>
            <div className='project-btn'>
              <a href=''>View Project</a>
            </div>
          </div>

          <div className='project-body2'>
            <img src={Design}></img>
            <h1>Data Analysis</h1>
            <div className='project-btn'>
              <a href=''>View Project</a>
            </div>
          </div>

          <div className='project-body3'>
            <img src={Design}></img>
            <h1>Data Analysis</h1>
            <div className='project-btn'>
              <a href=''>View Project</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cert" id='Certificate'>
        <div className='cert-head'>
          <p>My</p>
          <h1>Awards & Certificates</h1>
        </div>
        <div className='cert-card'>
          <a href='' ><img src={Cert} className='cert-img1'></img></a>
          <a href='' ><img src={Cert} className='cert-img2'></img></a>
          <a href='' ><img src={Cert} className='cert-img3'></img></a>
        </div>
      </section>

      <section className='cont' id='Contact'>
        <div className='cont-head'>
          <p>Get in Touch</p>
          <h1>Contact Me</h1>
        </div>
        <div className='cont-main'>
          <div className='cont-para'>
            <h1>Let's Connect<span>...</span></h1>
            <p>I’m a data analyst passionate about solving problems and helping others grow. Whether you need help with data insights, resume reviews, or optimizing your LinkedIn and Naukri profiles, feel free to reach out. I'm also open to exploring new opportunities.</p>
            <div className='cont-link'>
              <div className='linkedin'>
                <a href='https://www.linkedin.com/in/deva-s-work1111'><img src={Linkedin} ></img></a>
              </div>
              <div className='mail'>
                <a href='mailto:devaswork1111@gmail.com'><img src={Mail} ></img></a>
              </div>
              <div className='whatsapp'>
                <a href='https://api.whatsapp.com/send?phone=919677836558'><img src={Whatsapp} ></img></a>
              </div>
            </div>
          </div>

          <div className='cont-query'>
            <input
              placeholder="Name"  
              className="input"
              name="Name"
              type="text"
              onChange={handleChange} />
            <br></br>

            <input
              placeholder="Email address"
              className="input"
              name="Email"
              type="email"
              onChange={handleChange} />
            <br></br>

            <input
              placeholder="Subject"
              className="input"
              name="Subject"
              type="text"
              onChange={handleChange} />
            <br></br>

            <textarea
              name="Message"
              className="input-text"
              id="textarea"
              rows={5} placeholder="Enter Your Message Here!"
              onChange={handleChange} ></textarea>

            <div className='cont-submit-btn'>
              <button onClick={() => PostData()}>Submit</button>
            </div>
          </div>
        </div>
      </section >

      <section className='down'>
        <div className='footer'>
          <div className='footer-cont'>
            <p>CopyRights @2024 - Developed by</p><a href='https://www.linkedin.com/in/deva-s-work1111'>Mr/Deva</a>
          </div>
        </div>
      </section>
    </>
  )

}

