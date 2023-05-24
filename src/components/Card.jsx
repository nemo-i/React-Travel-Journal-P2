/* eslint-disable react/prop-types */
import Location from "./Location";
export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.image} />
      <div className="card-data">
        <Location country={props.country} map={props.googleMapsLink} />
        <h1>{props.locationName}</h1>
        <p className="time">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
