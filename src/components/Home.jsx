import { useEffect, useState } from "react";
import { getRandomUsers } from "../utils/utils";
import PersonCard from "./PersonCard";

export default function Home() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = () => {
    setLoading(true);
    getRandomUsers().then(({ results }) => {
      console.log("axios", results);
      setPeople(results);
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <section>
        <ul>
          {people?.map((person, index) => (
            <div key={index} className="person-card">
              <PersonCard person={person} />
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
}
