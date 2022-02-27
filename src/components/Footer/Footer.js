import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Whats-App</LinkTitle>
            <LinkItem>+91-6397379087</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:ayush94129@gmail.com">
              ayush94129@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>
              This website was made using Next.js and ReactJs.<br></br>
              Star/Follow me on Github
            </Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/ayush-bot011">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/ayush-pandey-909b1a201/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/ayush_pandey235/?hl=en">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
