import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import styled from 'styled-components'
import { PURPLE_TEXT_COLOR } from '../utils/colors'

const FONT_SIZE = '3rem'

const FontAwesomeContainer = styled(FontAwesomeIcon)`
  font-size: ${FONT_SIZE};
  margin-right: 2rem;
  cursor: pointer;

  :hover {
    color: ${PURPLE_TEXT_COLOR};
  }
`

interface FontAwesomeLinkProps {
  readonly icon: IconDefinition
  readonly link: string
}

const FontAwesomeLink: FC<FontAwesomeLinkProps> = ({ icon, link }) => {
  return (
    <a href={link}>
      <FontAwesomeContainer icon={icon} />
    </a>
  )
}

export default FontAwesomeLink
