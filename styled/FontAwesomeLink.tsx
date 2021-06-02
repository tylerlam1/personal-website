import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { PURPLE_TEXT_COLOR } from "../utils/colors";

const FONT_SIZE = "3rem";

const FontAwesomeContainer = styled(FontAwesomeIcon)`
  font-size: ${FONT_SIZE};
  margin-right: 2rem;
  cursor: pointer;

  :hover {
    color: ${PURPLE_TEXT_COLOR};
  }
`;

interface FontAwesomeLinkProps {
  readonly icon: IconDefinition;
  readonly link: string;
}

export default function FontAwesomeLink({
  icon,
  link,
}: FontAwesomeLinkProps): JSX.Element {
  return (
    <a href={link}>
      <FontAwesomeContainer icon={icon} />
    </a>
  );
}
