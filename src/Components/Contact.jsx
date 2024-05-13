import React, { useState } from "react";
import gitImg from "../Assets/social/github.png";
import linkImg from "../Assets/social/LinkedIn.png";
import instaImg from "../Assets/social/instagram.png";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import Navbar from "./Navbar";
const firebaseConfig = {
  apiKey: "AIzaSyDtLJNYpxk4KW3Pr_j5Y-lz-RvtB7V9FGs",
  authDomain: "akshaybhandarkarportfoli-59b2e.firebaseapp.com",
  projectId: "akshaybhandarkarportfoli-59b2e",
  storageBucket: "akshaybhandarkarportfoli-59b2e.appspot.com",
  messagingSenderId: "975007718778",
  appId: "1:975007718778:web:1de6309bb8efb1dbe80ac3",
  measurementId: "G-1EVMR0S5XY",
};
const app = initializeApp(firebaseConfig);

function Contact() {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const [persons, setPersons] = useState([]);
  const [id, setID] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setID(id + 1);
    setPersons([
      ...persons,
      {
        id: id,
        name: username,
        description: msg,
      },
    ]);
    // saveToFile(persons);
    saveData();
    setUsername("");
    setMsg("");
    // alert("Thank you!!");
  }

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "contacts"));
    set(newDocRef, {
      username: username,
      Message: msg,
    }).then(() => {
      alert("Recieved Your Message");
    });
  };
  // const saveToFile = () => {
  //   const json = JSON.stringify(persons);
  //   const blob = new Blob([json], { type: "application/json" });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "data.json";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // };
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <center>
          <div className="formContainer">
            <div className="formsection1">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              ></input>
            </div>
            <div className="formsection2">
              <label>Enter your Message</label>

              <textarea
                value={msg}
                onChange={(event) => {
                  setMsg(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="formsection3">
              <button className="btn  btn-danger">Submit</button>
            </div>
            <div className="formFooter">
              <div>
                <li>
                  <a href="https://www.linkedin.com/in/akshay5619">
                    <img src={linkImg} height="40px" width="40px"></img>
                  </a>
                </li>
              </div>
              <div>
                {" "}
                <li>
                  <a href="https://github.com/AkshayBhandarkarH">
                    {" "}
                    <img src={gitImg} height="40px" width="40px"></img>
                  </a>
                </li>
              </div>
              <div>
                {" "}
                <li>
                  <a href="https://www.instagram.com/_akshay_bhandarkar_/">
                    {" "}
                    <img src={instaImg} height="40px" width="40px"></img>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </center>
      </form>
    </div>
  );
}

export default Contact;
