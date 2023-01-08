import React from "react";
import '../Style/Expirence.css';

function MsaComp() {
  return (
    <div className="container_two ">
      <div className="Heading_msa center_align">
        <h1 className="h1_msa">MSA Softwares</h1>
      </div>
      <div className="designation_msa center_align">
        <h2 className="h2_msa">Full Stack Developer</h2>
        <h3 className="h3_msa">10 Months</h3>
      </div>
      
      <div className="tech_stack_msa ">
        <div className="tect_stack_msa_new center_align">
          <p className="p_teck_stack">Teck Stack</p>
        </div>
        <p className="p_msa center_align">
          React JS, Node JS, Redux, Mongo DB, Wordpress, Ui/UX Designing, etc.
        </p>
      </div>
      <div className="Brief_Description_msa ">
        <div className="job_roles center_align">
          <p className="job_roles_msa ">Job Roles</p>
        </div>
        <p className="p2_msa center_align">
          I got to work under a good Team where we build a
          good Architecture of business logic as well as we build Portals for
          users to fill data and get it into our App's Frontend. I've Also
          Designed many Websites using Wordpress.
        </p>
      </div>
      <div className="achivements_msa ">
        <div className=" center_align">
          <p className="Achivemets">Achivements</p>
        </div>
        
        <p className="p3_msa center_align">
        Best Tem Player of the Month.<br/>
        I've Achieved Best Team Member of the month in
Monorama Info. Pvt. Ltd.
        </p>
      </div>
    </div>
  );
}

export default MsaComp;
