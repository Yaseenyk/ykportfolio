import React from "react";
import { Helmet } from "react-helmet";
import ManoComp from "../Components/ManoComp";
import MsaComp from "../Components/MsaComp";
import "../Style/Expirence.css";


function Expirence() {
 
  return (
    <>
      <Helmet>
        <title>Expirence</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="Main_div_outer">
        
        <ManoComp/>
        <MsaComp/>
         
          
        
      </div>
    </>
  );
}

export default Expirence;
