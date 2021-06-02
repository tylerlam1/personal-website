import styled from "styled-components";
import { PURPLE_TEXT_COLOR } from "../utils/colors";

export default styled.a`
  color: ${PURPLE_TEXT_COLOR};

  :hover {
    text-decoration: underline;
  }
`;
