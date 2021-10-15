import React, { useState, useEffect } from "react";
import { FaBars, FaLinkedin, FaGithub } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import {
  SocialIconLink,
  SocialIcons,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Anton Lindgren
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="educations"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Educations
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="qualifications"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Qualifications
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Work experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="find"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Find me
              </NavLinks>
            </NavItem>
          </NavMenu>
          
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
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
