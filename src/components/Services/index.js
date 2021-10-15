import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import Icon4 from "../../images/svg-4.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon scr={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>Här hahsdhas dna sdaasjd ajdajd a</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon scr={Icon2} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>Här hahsdhas dna sdaasjd ajdajd a</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon scr={Icon3} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>Här hahsdhas dna sdaasjd ajdajd a</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
