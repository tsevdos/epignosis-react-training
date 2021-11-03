import React, { useState } from "react";
import { Heading, Button, Loader } from "@epignosis_llc/gnosis";

const HookUseEffect3 = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchQuote = () => {
    setIsLoading(true);

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
  };

  return (
    <>
      <Heading as="h2">useEffect() - example 3</Heading>

      <Button
        className="m-b"
        type="primary"
        onClick={fetchQuote}
        isLoading={isLoading}
      >
        Fetch Quote!
      </Button>

      {isLoading ? <Loader /> : <Heading as="h4">{joke}</Heading>}
    </>
  );
};

export default HookUseEffect3;
