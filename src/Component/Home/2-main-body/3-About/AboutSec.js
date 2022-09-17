import React from "react";
import "./AboutSec.css";
import AboutStd from "./AboutStd/AboutStd";
import Point from "./Point/Point";
import ImagesCom from "./ImgCom/ImagesCom";
import img from "../../../Data/AboutData/img";

const AboutSec = () => {
  return (
    <section className='about_section'>
      <div className='container'>
        <div className='student-container'>
          <div className='student-container1'>
            <AboutStd />
            {/* great-point */}

            <p className='student-container_contents'>
              JIITS Solution central India leading and best information
              technology computer education and self-income earning center In
              Nagpur. The team is very experience, helpful and cooperative
              teachers. JIIT Solution Opening job Nagpur plus Vidharbh or all
              India. JIIT Solutions Provide best knowledge of IT Computer
              education or palest the job. Our think is making a bigger Platform
              or IT Hub in Nagpur. JIITS Solution in Nagpur offer World class
              training in courses of c,c++, java, advance, java, oracle, visual
              Basic, Android, Net VB, php, VB net, Asp.net,c# ,Net, AutoCAD ,
              Revit, Maya Animation, Flash Photoshop,Excel,Pro-e, Catia
              unigraphics, 3d Max, CorelDraw, graphic, Ansys software testing,
              Hardwar & Networking, Tally, course, Web or Portal Designing, IT
              Core Services & all Tally accounting pr software course available.
            </p>
          </div>

          {/* Api */}
        </div>
        <div className='student-container_contents2'>
          <h1> OUR CORE VALUE SYSTEM</h1>
          <p>
            We create all types of IT knowledgeable & Income we earning able
            person JIITS Solution trainers are passion able about the teaching
            in our students and they support in front of their scholarly or
            creative work. JIIT Solution Expert Education Brilliance and
            encourage self-income & IT Education experience We believe helpful
            process are the important key to successful learning & earning. We
            spend much time on a developing process & explain to particular
            example to help earning income JIIT Solution aims to facilitated the
            better quality education and intellectually satisfying Learning
            experience to every learns. Demand for an enjoyable, incomable, vale
            adding and personalized learning experience has Become the driving
            force for technology development. JIITS Solution Maharashtra India a
            better learning & job provider auto system. JIIT Solution offers IT
            literacy and functionally education and training to learners in
            abroad.
          </p>
        </div>
        <div className='contents'>
          <h1>Why Only JIITS?</h1>
          <p> We create all types of IT knowledgeable & Income</p>
        </div>
        <div className='great-point-main'>
          <div className='great-point'>
            <p
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Point st='2k+' info='Students' />
              <Point st='3.50' info=' Above Package CTC' />
              <Point st='100%' info='placements' />
              <Point info='We have teams of experience IT traine' />
            </p>
          </div>
          <ImagesCom img={img} />
        </div>
        {/* <div className='icons'> 
          <div className='icons123'>
            <img src='./images/4-uv-welcome/employees-2.png' />
            <p>We have teams of experience IT traine</p>
            <img src='./images/4-uv-welcome/employees-2.png' />
            <p>
              Nam libero tempore, cum soluta nobis est eligendi cumque facere
              possimus
            </p>
            <img src='./images/4-uv-welcome/employees-2.png' />
            <p>
              Nam libero tempore, cum soluta nobis est eligendi cumque facere
              possimus
            </p>
            <img src='./images/4-uv-welcome/employees-2.png' />
            <p>
              Nam libero tempore, cum soluta nobis est eligendi cumque facere
              possimus
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSec;
