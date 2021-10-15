import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
  SideBtnWrap,
} from "./SidebarElements";
import { SocialIcons, SocialIconLink } from "./SidebarElements";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="educations" onClick={toggle}>
            Educations
          </SidebarLink>
          <SidebarLink to="experience" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to="qualifications" onClick={toggle}>
            Qualifications
          </SidebarLink>
          <SocialIcons>
            <SocialIconLink
              href="//www.linkedin.com/in/anton-lindgren-101903141/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="//www.github.com/antonlindgren93"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SidebarMenu>
        <SideBtnWrap></SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
