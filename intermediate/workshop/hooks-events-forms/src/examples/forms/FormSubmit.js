import React, { useState } from "react";
import { Heading, Label, Input, Button } from "@epignosis_llc/gnosis";

async function seacrhSWCharacter(character) {
  try {
    const res = await fetch(`https://swapi.dev/api/people?search=${character}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const FormSubmit = () => {
  const [character, setCharacter] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const updateCharacter = (e) => {
    setCharacter(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await seacrhSWCharacter(character);
    setSearchResults(response.results);
  };

  return (
    <div>
      <Heading as="h2">Form submit (async)</Heading>
      <form onSubmit={handleSearch}>
        <div>
          <Label htmlFor="name">Star Wars character search:</Label>
          <Input
            className="m-b"
            type="text"
            name="name"
            value={character}
            onChange={updateCharacter}
          />
        </div>
        <Button type="submit">Search!</Button>
      </form>

      {Boolean(searchResults.length) ? (
        <ul style={{ fontSize: "20px", fontWeight: "bold" }}>
          {searchResults.map(({ name, gender }) => (
            <li key={name}>
              name: {name} / gender: {gender}
            </li>
          ))}
        </ul>
      ) : (
        <Heading as="h4">No results</Heading>
      )}
    </div>
  );
};

export default FormSubmit;
