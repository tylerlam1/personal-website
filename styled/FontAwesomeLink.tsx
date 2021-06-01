import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const FontAwesomeContainer = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  margin-right: 1rem;
  cursor: pointer;
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
