import React, { useState } from "react";
import { Heading, Label, Input } from "@epignosis_llc/gnosis";

const SimpleInput = () => {
  const [val, setVal] = useState("");
  const updateName = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      <Heading as="h2">Input</Heading>
      <Label htmlFor="name">Name:</Label>
      <Input
        className="m-b"
        type="text"
        name="name"
        value={val}
        onChange={updateName}
      />
      <Heading as="h4">{val}</Heading>
    </>
  );
};

export default SimpleInput;
