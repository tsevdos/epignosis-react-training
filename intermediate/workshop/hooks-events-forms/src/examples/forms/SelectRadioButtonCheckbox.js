import React, { useState } from "react";
import { Heading } from "@epignosis_llc/gnosis";

const SelectRadioButtonCheckbox = () => {
  const [language, setlanguage] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const changeLanguage = (e) => {
    setlanguage(e.target.value);
  };
  const changeGender = (e) => {
    setGender(e.target.value);
  };
  const changeInterest = (e) => {
    const value = e.target.value;
    if (interests.includes(value)) {
      // setInterests
      setInterests(interests.filter((interest) => interest !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  return (
    <>
      <Heading as="h2">Select, radio button and checkbox</Heading>
      <div className="m-b">
        <label htmlFor="language">Favorite language:</label>
        <select name="language" value={language} onChange={changeLanguage}>
          <option value="">Select...</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Rust">Rust</option>
          <option value="PHP">PHP</option>
          <option value="Java">Java</option>
        </select>
      </div>
      <div className="m-b">
        <Heading as="h4">Gender:</Heading>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={changeGender}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={changeGender}
          />
          Female
        </label>
      </div>
      <div className="m-b">
        <Heading as="h4">Interests:</Heading>
        <div>
          <label>
            <input
              type="checkbox"
              name="programming"
              value="programming"
              checked={interests.includes("programming")}
              onChange={changeInterest}
            />
            Programming
          </label>
          <label>
            <input
              type="checkbox"
              name="movies"
              value="movies"
              checked={interests.includes("movies")}
              onChange={changeInterest}
            />
            Movies
          </label>
          <label>
            <input
              type="checkbox"
              name="boxing"
              value="boxing"
              checked={interests.includes("boxing")}
              onChange={changeInterest}
            />
            Boxing
          </label>
        </div>
      </div>

      <div>
        <Heading as="h2">Results</Heading>
        <Heading as="h4">{language}</Heading>
        <Heading as="h4">{gender}</Heading>

        <ul style={{ fontSize: "20px", fontWeight: "bold" }}>
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SelectRadioButtonCheckbox;
