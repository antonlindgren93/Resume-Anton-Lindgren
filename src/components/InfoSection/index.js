import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../ButtonElements";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import {
  Column2,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  SocialIcons,
  SocialIconLink,
} from "./InfoElements";

import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalImg,
  ModalWrapper,
} from "../Modal/ModalElements";
import Modal from "../Modal";

const Containier = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  // const [showModal, setShowModal] = useState(true);
  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  //   console.log("Value of showmodal is " + showModal)
  // };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {/* <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={openModal}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
