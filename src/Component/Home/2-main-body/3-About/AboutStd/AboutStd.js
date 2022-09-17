import React from "react";
import { Button } from "@mui/material";

const AboutStd = () => {
  return (
    <>
      <div className="about-std-university">
        <h3>About JIITS ?</h3>
        <h2>Welcome to Training Jobs Placements Outsourcing</h2>

        {/* <p>
        JIITS Solution in Nagpur offer World class training in courses of c,c++,
        java, advance, java, oracle, visual Basic, Android, Net VB, php, VB net,
        Asp.net,c# ,Net, AutoCAD , Revit, Maya Animation, Flash
        Photoshop,Excel,Pro-e, Catia unigraphics, 3d Max, CorelDraw, graphic,
        Ansys software testing, Hardwar & Networking, Tally, course, Web or
        Portal Designing, IT Core Services & all Tally accounting pr software
        course available.
      </p> */}
        <div className="btn">
          <Button className="btn2" variant="contained">
            Read More
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutStd;
