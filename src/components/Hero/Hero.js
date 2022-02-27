import React from "react";

import {
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Hello } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionSubText><span style={{color:"#64ffda"}}>Hello World !! My name is</span></SectionSubText>
      <SectionTitle main center>
        Ayush Pandey.<br></br>I love exploring new things!
      </SectionTitle>
      <SectionText>
        I'm a Full Stack Web developer with a goal-driven creative mindset and
        passion for learning and innovating.
      </SectionText>
      <Button  onClick={() => (window.location = "https://drive.google.com/file/d/1-C76WDriH-K9xiX82GWBkehrBSR7y_om/view?usp=sharing")}>
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
