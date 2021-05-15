import NavigationBar from "./components/navbar";
import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
export default function News() {
  const closeSidebar = () => {
    const sideBar = document.querySelector(".side-bar");
    const disableDiv = document.querySelector(".disable-div");
    sideBar.style.transform = "translateX(400px)";
    disableDiv.style.display = "none";
  };
  const [newsData, setNewsData] = useState([]);
  useEffect(async () => {
    const res = await fetch("/api/new");
    const data = await res.json();
    setNewsData(data.articles);
    const loading = document.querySelector(".loading");
    loading.style.display = "none";
    return () => {};
  }, []);
  return (
    <div>
      <div className="loading">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div onClick={closeSidebar} className="disable-div"></div>
      <NavigationBar></NavigationBar>
      <div className="main-content">
        <NewsContent content={newsData}></NewsContent>
      </div>
      <Footer></Footer>
    </div>
  );
}

function NewsContent(props) {
  const news = props.content;
  const content = news.map(element => (
    <div key={element.key} className="article">
      <div className="content">
        <a className="article-header" target="_blank" href={element.url}>
          {element.title}
        </a>
        <p className="article-decription">{element.description}</p>
      </div>
      <div className="article-image">
        <img src={element.urlToImage} className="news-image"></img>
      </div>
    </div>
  ));
  return <React.Fragment>{content}</React.Fragment>;
}
