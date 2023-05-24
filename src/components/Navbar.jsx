import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  return (
    <nav className="nav-bar">
      <FontAwesomeIcon className="nav-icon" icon={faEarth} />
      <h5>my travel journal</h5>
    </nav>
  );
}
