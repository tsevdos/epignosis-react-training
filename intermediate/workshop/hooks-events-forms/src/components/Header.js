import React from "react";
import { Heading } from "@epignosis_llc/gnosis";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Heading as="h1">
      <Link to="/">React Demo</Link>
    </Heading>
  </header>
);

export default Header;
