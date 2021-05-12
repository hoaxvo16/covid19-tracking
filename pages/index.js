import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import NavigationBar from "./components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashBoard from "./components/dashboard";

export default function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>The Covid-19 tracking website</h1>
            <p>
              This website using API of
              <a className="web-link" href="https://apify.com/covid-19" target="_blank">
                apify
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
