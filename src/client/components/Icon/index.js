import React from "react";

import { Container } from "./styles";

const Icon = ({ shortcut: { icon }, action }) => (
  <Container icon={icon} onClick={() => action()} />
);

export default Icon;
