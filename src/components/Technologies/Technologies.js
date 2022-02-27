import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <div>
    <Section id="tech">
      <SectionDivider divider />
      
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
      Tools and Technologies I've Worked With :
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              HTML | CSS | Bootstrap<br></br> | React.js | Redux
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>DataBases</ListTitle>
            <ListParagraph>
              SQL | ORACLE | <br></br> Firebase | Php
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiZend size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Pogramming language</ListTitle>
            <ListParagraph>
              C | C++ | Java | <br></br> JavaScript | Python 
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
      <br></br>
      <br></br>
      <br></br>
    </Section>
  </div>
);

export default Technologies;
