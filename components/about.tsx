import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  GITHUB_LINK,
  LINKEDIN_LINK,
  MAIL_LINK,
  UFC_LINK,
  VALORANT_LINK,
} from "../utils/constants";
import FontAwesomeLink from "../styled/FontAwesomeLink";
import ExternalLink from "../styled/ExternalLink";

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DescriptionContainer = styled.p`
  margin: 2rem 0;
  font-weight: 10;
`;

export function About(): JSX.Element {
  return (
    <>
      <DescriptionContainer>
        <div>
          Hi There! I'm currently a fourth year student at the University of
          Calgary. In my free time, I enjoy following all things{" "}
          <ExternalLink href={UFC_LINK}>MMA</ExternalLink>, playing{" "}
          <ExternalLink href={VALORANT_LINK}>Valorant</ExternalLink> with my
          friends, and reading!
        </div>
      </DescriptionContainer>
      <IconContainer>
        <FontAwesomeLink icon={faEnvelope} link={MAIL_LINK} />
        <FontAwesomeLink icon={faLinkedin} link={LINKEDIN_LINK} />
        <FontAwesomeLink icon={faGithub} link={GITHUB_LINK} />
      </IconContainer>
    </>
  );
}
