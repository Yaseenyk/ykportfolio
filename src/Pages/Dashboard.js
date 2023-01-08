import React from "react";
import SideBars from "../images/SideBars.png";
import "../Style/Dashboard.css";
import Photo from "../images/Photo.png";
import YaseenResume from "../images/YaseenResume.pdf";
import { Helmet } from "react-helmet";

function Dashboard() {

  return (
    <div className="Main_container">

<Helmet>
        <title>YK Portfolio</title>
        <meta name="description" content="Yaseen Khatib Portfolio" />
    </Helmet>
      <div className="inner_container">
        <div className="Main_Photo">
          <img src={Photo} alt="Logo" className="Main_Photo_new" />
        </div>
        <div className="Main_text_div">
        <div className="Main_text">
            <h1 className='h1_dash'>HI! I'm</h1>
            <h2 className="h2_dash">Yaseen Khatib!</h2>
          </div>
          <div className="sub_heading">
            <p className="para_sub">
              I've an Expirence of 1+ years of ASP.net where i lead a team of 10
              People Interacting with clients as well as Developing Business
              Logic and getting up to the expectations of Clients, as well as 6
              Months of Freelancing Expirence of ReactJs where we Build a n
              Admin Portal with some UI Finishings!
            </p>
          </div>
          <div className='code_new'>
          <h3 className="code_design">
            I Code and Design Most of the time!
          </h3>
          </div>
          <div className="Photo">
            <img src={SideBars} alt="Logo" className="SideBar_new" />
          </div>
          <div className="btn_resume">
            <a href={YaseenResume} download="YaseenResume">
            <button className="resume_btn">Resume.io</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
