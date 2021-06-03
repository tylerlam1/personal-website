import styled from "styled-components";
import { faEnvelope, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  GITHUB_LINK,
  LINKEDIN_LINK,
  MAIL_LINK,
  UCALGARY_LINK,
  UFC_LINK,
  VALORANT_LINK,
} from "../utils/constants";
import FontAwesomeLink from "../styled/FontAwesomeLink";
import ExternalLink from "../styled/ExternalLink";

const FONT_SIZE = "20px";

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DescriptionContainer = styled.p`
  margin: 2rem 0;
  font-weight: 10;
  font-size: ${FONT_SIZE};
`;

interface FontAwesomeIcons {
  readonly icon: IconDefinition;
  readonly link: string;
}

export function About(): JSX.Element {
  const fontAwesomeIcons: readonly FontAwesomeIcons[] = [
    {
      icon: faEnvelope,
      link: MAIL_LINK,
    },
    {
      icon: faLinkedin,
      link: LINKEDIN_LINK,
    },
    {
      icon: faGithub,
      link: GITHUB_LINK,
    },
  ];

  return (
    <>
      <DescriptionContainer>
        <div>
          Hi There! I'm currently a fourth year student at the{" "}
          <ExternalLink href={UCALGARY_LINK}>
            University of Calgary
          </ExternalLink>
          . In my free time, I enjoy following all things{" "}
          <ExternalLink href={UFC_LINK}>MMA</ExternalLink>, playing{" "}
          <ExternalLink href={VALORANT_LINK}>Valorant</ExternalLink> with my
          friends, and reading!
        </div>
      </DescriptionContainer>
      <IconContainer>
        {fontAwesomeIcons.map((fontAwesomeIcon) => (
          <FontAwesomeLink
            icon={fontAwesomeIcon.icon}
            link={fontAwesomeIcon.link}
          />
        ))}
      </IconContainer>
    </>
  );
}
