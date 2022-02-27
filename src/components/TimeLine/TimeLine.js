import React, { useState, useRef, useEffect } from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  return (
    <div>
      <Section id="about">
        <SectionDivider divider />
        <SectionTitle>About Me</SectionTitle>
        <SectionSubText>
          <div>
            Hello! Interestingly, I have been a student of Computers in my high
            school and got introduced to programming in my freshman year at{" "}
            <span style={{ color: "#64ffda", fontWeight: "bold" }}>
              Graphic Era University.{" "}
            </span>
            My interest in web-development started back in 2020 during second
            year of B.tech . Since then, I started developing Web projects using
            HTML, CSS, Javascript / React.js / Node.js, MongoDB and some other
            cool libraries and frameworks.
            <br></br>
            <br></br>
            Today, I'm currently pursuing my Bachelors in Computer Science and
            Engineering (2019-2023) with{" "}
            <a>
              <span
                style={{ color: "#64ffda", fontWeight: "bold" }}
                onclick="hide(); return false"
              >
                9.16
              </span>
            </a>{" "}
            aggregate. Most Important I'm a{" "}
            <a
              href="https://auth.geeksforgeeks.org/user/ayush94129/practice/"
              target={"_blank"}
            >
              <span
                style={{ color: "#64ffda", fontWeight: "bold" }}
                onclick="hide(); return false"
              >
                Competitive Programmer.
              </span>
            </a>
            <br></br>
            <br></br>
            <span style={{ color: "#64ffda" }}>
              {" "}
              Here is the List of technoligies I have worked with:
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
              }}
            >
              <span style={{ color: "#64ffda" }}>~ C | | C++</span>
              <span style={{ color: "#64ffda" }}>~HTML | | CSS</span>

              <span style={{ color: "#64ffda" }}>~ JavaScript</span>
              <span style={{ color: "#64ffda" }}> ~ReactJs</span>

              <span style={{ color: "#64ffda" }}> ~Git || Github</span>
              <span style={{ color: "#64ffda" }}>~ MongoBD || Firebase</span>
            </div>
            <br></br>
          </div>
        </SectionSubText>
      </Section>
    </div>
  );
};

export default Timeline;
