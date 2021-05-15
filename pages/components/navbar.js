import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
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
    <div>
      <div className="side-bar">
        <FontAwesomeIcon onClick={closeSidebar} className="times-icon" icon={faTimes}></FontAwesomeIcon>
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>

        <Link href="/new">
          <a className="nav-link">News</a>
        </Link>
        <Link href="/guideline">
          <a className="nav-link">Guidline</a>
        </Link>
      </div>
      <div className="nav">
        <p className="logo">
          <FontAwesomeIcon className="nav-icon" icon={faBiohazard}></FontAwesomeIcon>
          covid tracking
        </p>
        <ul>
          <FontAwesomeIcon onClick={openSidebar} className="bars-icon" icon={faBars}></FontAwesomeIcon>
          <li className="nav-li">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>

            <Link href="/new">
              <a className="nav-link">News</a>
            </Link>
            <Link href="/guideline">
              <a className="nav-link">Guidline</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
