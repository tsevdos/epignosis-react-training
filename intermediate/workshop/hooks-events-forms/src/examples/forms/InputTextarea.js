import React, { useState } from "react";
import { Heading, Label, Input, Textarea } from "@epignosis_llc/gnosis";

const InputAndTextarea = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Heading as="h2">Input and textarea</Heading>
      <div>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" name="name" value={name} onChange={updateName} />
      </div>
      <br />
      <div className="m-b">
        <Label htmlFor="comment">Comment:</Label>
        <Textarea name="comment" value={comment} onChange={updateComment} />
      </div>

      <Heading as="h4">{name}</Heading>
      <Heading as="h4">{comment}</Heading>
    </>
  );
};

export default InputAndTextarea;
