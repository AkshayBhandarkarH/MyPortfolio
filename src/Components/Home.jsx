import React, { useState } from "react";
import img from "../Assets/Mypic.jpeg";
import { Document, Page } from "react-pdf";
import ResumePDF from "../Assets/Resume_Akshay_Bhandarkar.pdf"; // Import PDF file
// require(`../Assets/${detail.img}`);
import profile from "../data/introduction.json";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function Home() {
  const nav = useNavigate();
  const [showPDF, setShowPDF] = useState(false);

  function handleclick() {
    setShowPDF(true);
  }
  function handleReturn() {
    setShowPDF(false);
  }

  return (
    <div>
      {/* <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div> */}
      {!showPDF && (
        <div className="HomeHeader home-body">
          <Navbar />
          {/* <h1 className="HeaderContent">Welcome to MyPortfolio</h1> */}
          <div className="Home_Content">
            {profile.map((Image) => {
              return (
                <div className="homeContone">
                  <div className="sideWheel">
                    <img src={require(`../Assets/${Image.url}`)} className="profile_img"></img>
                  </div>
                </div>
              );
            })}
            {profile.map((detail) => {
              return (
                <div className="homeConttwo">
                  <p>
                    <span style={{ fontSize: "20px", color: "Orange" }}>Welcome</span> to my portfolio!
                    <br />
                    <span style={{ fontSize: "20px", color: "black" }}>I'm</span> <strong>{detail.name}</strong>,<br /> a passionate software engineer
                    specializing in {detail.domain}. With a keen eye for detail and a love for learning, I dive headfirst into the world of coding to
                    craft seamless, user-friendly digital experiences. My journey into the realm of {detail.domain} began with a fascination for how
                    technology can shape and enhance our daily lives. <br />
                    Since then, I've honed my skills in various {detail.domain} tools and technologies, always staying at the forefront of industry
                    trends and best practices. What sets me apart is not just my proficiency in {detail.domain} tools but also my insatiable appetite
                    for growth. I thrive on challenges and approach each project with enthusiasm, leveraging my expertise to turn ideas into reality.
                    Whether it's designing responsive layouts, optimizing performance, or troubleshooting intricate bugs, I'm committed to delivering
                    solutions that exceed expectations. <br /> With a blend of creativity and technical prowess, I transform concepts into captivating
                    digital experiences that leave a lasting impression.
                  </p>
                </div>
              );
            })}
          </div>
          <div className="resume">
            <button className="btn btn-dark" onClick={handleclick}>
              Check Resume
            </button>
          </div>
        </div>
      )}
      {showPDF && (
        <div>
          {profile.map((file) => {
            return (
              <>
                <button className="btnReturn btn btn-dark" onClick={handleReturn}>
                  Back
                </button>

                <embed src={require(`../Assets/${file.resume}`)} type="application/pdf" width="100%" className="pdf" />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
