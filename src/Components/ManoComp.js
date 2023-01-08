import React from "react";
import '../Style/Expirence.css';

function ManoComp() {
  return (
    <div className="container_one">
      <div className="Heading center_align">
        <h1 className="h1_mano">Manorama Info Pvt Ltd</h1>
      </div>
      <div className="designation center_align">
        <h2 className="h2_mano">Software Engineer</h2>
        <h3 className="h3_mano">1 Year 4 Months</h3>
      </div>
      
      <div className="tech_stack">
        <div className="tech center_align">
          <p>Tech Stack</p>
        </div>
        <p className="p_mano center_align">
          Asp.net , MVC, .net Core, Postman, SQL (SSRS), Port
          Forwarding , Team Management, Micro-services etc.
        </p>
      </div>
      <div className="Brief_Description ">
        <div className="desc center_align">
          <p className='desc_new'>Job Role</p>
        </div>
        <p className="p2_mano center_align">
          I've a vast experience in programming Knowledge for
          JSON file Transfer from Ports and Local Connection as well as a deep
          knowledge for Windows Services which run on a Time Interval in
          Background.
        </p>
      </div>
      <div className="achivements ">
        <h3 className="h3_mano center_align">Achievements</h3>
        <p className="p3_mano center_align">
        Best Tem Player of the Month.<br/>
        I've Achieved Best Team Member of the month in
Monorama Info. Pvt. Ltd.

        </p>
      </div>
    </div>
  );
}

export default ManoComp;
