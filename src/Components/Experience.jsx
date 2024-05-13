import React from "react";
import expdata from "../data/ExperienceData.json";
import Navbar from "./Navbar";
function Experience() {
  return (
    <div>
      <Navbar />
      <div className="dataContainer">
        {expdata.map((exp) => {
          return (
            <>
              <div className="exp_name">
                <p>{exp.worktype}</p>
              </div>
              {exp.details.map((work) => {
                return (
                  <>
                    <div className="exp_header">
                      <div className="exp_title">
                        <p>{work.title}</p>
                      </div>
                      <div className="exp_date">{work.date}</div>
                    </div>
                    <div className="exp_details">
                      {work.description.map((desc) => {
                        return (
                          <>
                            <p>{desc.paragraph}</p>
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
