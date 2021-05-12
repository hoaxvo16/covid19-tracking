import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
export default function NavigationBar() {
  return (
    <div className="nav">
      <ul>
        <p className="logo">
          <FontAwesomeIcon className="nav-icon" icon={faBiohazard}></FontAwesomeIcon>
          covid tracking
        </p>
        <li className="nav-li">
          <a className="nav-link">Home</a>
          <a className="nav-link">News</a>
          <a className="nav-link">Covid api</a>
        </li>
      </ul>
    </div>
  );
}
