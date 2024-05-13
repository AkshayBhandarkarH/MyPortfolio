import React from "react";

import data from "../data/Skilldata.json";
import Navbar from "./Navbar";
function Skills() {
  return (
    <div className="main">
      <Navbar />

      <div className="skills_conatainer">
        <center></center>

        <div className="skill_section">
          {" "}
          {data.map((image, index) => {
            return (
              <>
                <p className="skill_name">{image.title}</p>
                <div className="img_container">
                  {image.details.map((detail) => {
                    return (
                      <div className="skillContents">
                        <div className="img_content">
                          <img src={require(`../Assets/${detail.img}`)} alt="" height="100px" width="120px"></img>
                          <br />
                          <p className="skill_name">{detail.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* <div className="skills_conatainer">
        <center>
          <h1>Frontend Development</h1>
        </center>
        <hr />
        <div className="skill_section">
          <div className="img_section">
            <div className="img">
              {" "}
              {ImagesFrontend.map((image, index) => {
                return (
                  <>
                    <div className="img_content">
                      <img key={index} src={require(image.img)} alt="image" height="100px" width="120px"></img>
                      <br />
                      <p className="skill_name">{image.name}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="skills_conatainer">
        <center>
          <h1>Libraries/framework</h1>
        </center>
        <hr />
        <div className="skill_section">
          <div className="img_section">
            <div className="img">
              {" "}
              {Imageslibrary.map((image, index) => {
                return (
                  <>
                    <div className="img_content">
                      <img key={index} src={image.img} alt="image" height="100px" width="120px"></img>
                      <br />
                      <p className="skill_name">{image.name}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="skills_conatainer">
        <center>
          <h1>Backend Development</h1>
        </center>
        <hr />
        <div className="skill_section">
          <div className="img_section">
            <div className="img">
              {" "}
              {ImagesBackend.map((image, index) => {
                return (
                  <>
                    <div className="img_content">
                      <img key={index} src={image.img} alt="image" height="100px" width="120px"></img>
                      <br />
                      <p className="skill_name">{image.name}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="skills_conatainer">
        <center>
          <h1>others</h1>
        </center>
        <div className="skill_section">
          <div className="img_section">
            <div className="img">
              {" "}
              {Imagesothers.map((image, index) => {
                return (
                  <>
                    <div className="img_content">
                      <img key={index} src={image.img} alt="image" height="100px" width="120px"></img>
                      <br />
                      <p className="skill_name">{image.name}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
