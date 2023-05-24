/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Location(props) {
  return (
    <div className="location">
      <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
      <p className="location-name">{props.country}</p>
      <a href={props.map} target="_blank" rel="noreferrer">
        View on Google Maps
      </a>
    </div>
  );
}
