import React from "react";
import eduData from "../data/EduDate.json";
import Navbar from "./Navbar";
function Academics() {
  return (
    <div>
      <Navbar />
      <div className="dataContainer">
        {eduData.map((data) => {
          return (
            <>
              <div className="exp_name">
                <p>{data.Education}</p>
              </div>
              {data.details.map((detail) => {
                return (
                  <>
                    <div className="exp_header">
                      <div className="exp_title">
                        <p>{detail.Organization}</p>
                      </div>
                      <div className="exp_date">{detail.year}</div>
                    </div>
                    <div className="exp_details"></div>
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

export default Academics;
