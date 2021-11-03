import React, { useState } from "react";
import { Heading, Input } from "@epignosis_llc/gnosis";

export default function HookUseState() {
  const [name, setName] = useState("John");

  return (
    <>
      <Heading as="h2">useState()</Heading>
      <Input
        className="m-b"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Heading as="h3">Hello, {name}!</Heading>
    </>
  );
}

// const [name, setName] = useState("John");
// const updateName = (e) => {
//   setName(e.target.value);
// };
