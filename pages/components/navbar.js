import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
export default function NavigationBar() {
  return (
    <div className="nav">
      <ul>
        <FontAwesomeIcon className="nav-icon" icon={faBiohazard}></FontAwesomeIcon>
        <li className="nav-li">
          <a className="nav-link">Home</a>
          <a className="nav-link">News</a>
          <a className="nav-link">Covid Api</a>
        </li>
      </ul>
    </div>
  );
}
