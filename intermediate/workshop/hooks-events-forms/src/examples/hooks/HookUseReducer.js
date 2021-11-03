import React, { useReducer, useEffect } from "react";
import { Heading } from "@epignosis_llc/gnosis";

const initialState = {
  joke: "",
  isLoading: true,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_JOKE":
      return { ...state, isLoading: false, joke: payload.value.joke };
    default:
      return state;
  }
};

export default function HookUseReducer() {
  const [{ joke, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://api.icndb.com/jokes/random")
      .then((res) => res.json())
      .then((joke) => {
        dispatch({ type: "GET_JOKE", payload: joke });
      });
  }, []);

  return (
    <>
      <Heading as="h2">useReducer()</Heading>

      {isLoading ? (
        <Heading as="h4">Loading...</Heading>
      ) : (
        <Heading as="h4">{joke}</Heading>
      )}
    </>
  );
}
