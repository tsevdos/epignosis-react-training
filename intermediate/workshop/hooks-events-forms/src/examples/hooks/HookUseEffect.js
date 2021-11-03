import React, { useState, useEffect } from "react";
import { Heading, Button } from "@epignosis_llc/gnosis";

const HookUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const addOne = () => {
    setCounter((counter) => counter + 1);
  };
  useEffect(() => {
    console.log("useEffect demo");

    // return () => console.log("Unmount");
  }); // dependency array

  return (
    <>
      <Heading as="h2">useEffect() - example 1</Heading>
      <Button type="primary" onClick={addOne}>
        Counter {counter}
      </Button>
    </>
  );
};

export default HookUseEffect;
