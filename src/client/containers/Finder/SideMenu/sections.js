import React from "react";

import { SectionContainer, SectionTitle } from "./styles";

const sections = [
  {
    sectionName: "Favorites",
    content: [
      {
        contentName: "Desktop",
        icon: "",
        path: "~/Desktop"
      }
    ]
  }
];

const Section = () => (
  <SectionContainer>
    <SectionTitle />
  </SectionContainer>
);

export default Section;
