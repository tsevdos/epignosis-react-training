import React, { useState, useEffect } from "react";
import { Heading } from "@epignosis_llc/gnosis";

export default function HookUseEffect2() {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://api.icndb.com/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJoke(data.value.joke);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Heading as="h2">useEffect() - example 2</Heading>

      {isLoading ? (
        <Heading as="h4">Loading...</Heading>
      ) : (
        <Heading as="h4">{joke}</Heading>
      )}
    </>
  );
}
