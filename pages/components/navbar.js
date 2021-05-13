import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default function NavigationBar() {
  const openSidebar = () => {
    const sideBar = document.querySelector(".side-bar");
    const disableDiv = document.querySelector(".disable-div");
    sideBar.style.transform = "translateX(0px)";
    disableDiv.style.display = "block";
  };
  const closeSidebar = () => {
    const sideBar = document.querySelector(".side-bar");
    const disableDiv = document.querySelector(".disable-div");
    sideBar.style.transform = "translateX(400px)";
    disableDiv.style.display = "none";
  };
  return (
    <div className="nav">
      <ul>
        <p className="logo">
          <FontAwesomeIcon className="nav-icon" icon={faBiohazard}></FontAwesomeIcon>
          covid tracking
        </p>
        <FontAwesomeIcon onClick={openSidebar} className="bars-icon" icon={faBars}></FontAwesomeIcon>
        <li className="nav-li">
          <a className="nav-link">Home</a>
          <a className="nav-link">News</a>
          <a className="nav-link">Covid api</a>
        </li>
      </ul>
      <div className="side-bar">
        <FontAwesomeIcon onClick={closeSidebar} className="times-icon" icon={faTimes}></FontAwesomeIcon>
        <a className="nav-link">Home</a>
        <a className="nav-link">News</a>
        <a className="nav-link">Covid api</a>
      </div>
    </div>
  );
}
