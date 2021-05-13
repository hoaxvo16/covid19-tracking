import Head from "next/head";
import { useEffect, useState } from "react";
import NavigationBar from "./components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashBoard from "./components/dashboard";

export default function Home() {
  const closeSidebar = () => {
    const sideBar = document.querySelector(".side-bar");
    const disableDiv = document.querySelector(".disable-div");
    sideBar.style.transform = "translateX(400px)";
    disableDiv.style.display = "none";
  };
  return (
    <div>
      <div onClick={closeSidebar} className="disable-div"></div>
      <NavigationBar></NavigationBar>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>The Covid-19 tracking website</h1>
            <p>
              This website using API of
              <a className="web-link" href="https://documenter.getpostman.com/view/10808728/SzS8rjbc" target="_blank">
                Postman
              </a>
              to tracking covid 19
            </p>
            <a href="https://github.com/mcsheffey/covid19-tracking" target="_blank">
              View source code
            </a>
          </div>
        </div>
        <div className="dashboard-col">
          <DashBoard></DashBoard>
        </div>
      </div>
    </div>
  );
}
