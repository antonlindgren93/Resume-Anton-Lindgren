import React, { useState } from "react";

import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalImg,
  ModalWrapper,
} from "./ModalElements";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            {/* <ModalImg
              src={require("../../images/profilbild.jpeg").default}
              alt="profilbild"
            /> */}
            <ModalContent>
              <h1>This is me</h1>
              <p>Hello my name is Anton</p>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
