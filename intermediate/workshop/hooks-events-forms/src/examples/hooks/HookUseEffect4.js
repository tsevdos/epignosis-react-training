import React, { useState, useEffect } from "react";
import { Heading } from "@epignosis_llc/gnosis";

const HookUseEffect4 = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  useEffect(() => {
    const logMousePosition = (e) => {
      // console.log(e);
      const { clientX, clientY } = e;
      console.log({ x: e.clientX, y: e.clientY });
      setX(clientX);
      setY(clientY);
    };

    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component HookUseEffect4 unmounted!");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <>
      <Heading as="h2">useEffect() - example 4</Heading>
      <Heading as="h4">Mouse X - {x}</Heading>
      <Heading as="h4">Mouse Y - {y}</Heading>
    </>
  );
};

export default HookUseEffect4;
