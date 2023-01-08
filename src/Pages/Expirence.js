import React from "react";
import { Helmet } from "react-helmet";
import ManoComp from "../Components/ManoComp";
import MsaComp from "../Components/MsaComp";
import "../Style/Expirence.css";
import backgroundExp from "../images/backgroundExp.jpg";


function Expirence() {
 
  return (
    <>
      <Helmet>
        <title>Expirence</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="Main_div_outer" >
      <div className="Main_Photo_e">
          <img src={backgroundExp} alt="Logo" className="Main_Photo_exp" />
        </div>
        <ManoComp/>
        <MsaComp/>
         
          
        
      </div>
    </>
  );
}

export default Expirence;
