import { Link } from "react-router-dom";
import Button from "./Button";

function PersonCard({ person }) {
  return (
    <li>
      <p>
        {person.name.title} {person.name.first} {person.name.last}
      </p>
      <p>
        <span style={{ color: "red" }}>City</span>: {person.location.city}
      </p>
      <p>
        <span style={{ color: "red" }}>Country: </span>
        {person.location.city}
      </p>
      <div>
        <img src={person.picture.large} alt="" />
      </div>
      <div>
        <Button>
          <Link to="/details">View User</Link>
        </Button>
      </div>
    </li>
  );
}

export default PersonCard;
