import {
  AMAZON_LINK,
  FACEBOOK_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  MAIL_LINK,
  UCALGARY_LINK
} from '../utils/constants'
import { IconDefinition, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ExternalLink from '../styled/ExternalLink'
import FontAwesomeLink from '../styled/FontAwesomeLink'
import styled from 'styled-components'

const FONT_SIZE = '20px'

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const DescriptionContainer = styled.p`
  margin: 2rem 0;
  font-weight: 10;
  font-size: ${FONT_SIZE};
`

interface FontAwesomeIcons {
  readonly icon: IconDefinition
  readonly link: string
}

export function About(): JSX.Element {
  const fontAwesomeIcons: readonly FontAwesomeIcons[] = [
    {
      icon: faEnvelope,
      link: MAIL_LINK
    },
    {
      icon: faLinkedin,
      link: LINKEDIN_LINK
    },
    {
      icon: faGithub,
      link: GITHUB_LINK
    }
  ]

  return (
    <>
      <DescriptionContainer>
        Hi There! I am currently a fourth year student at the{' '}
        <ExternalLink href={UCALGARY_LINK}>University of Calgary</ExternalLink>. I am a software
        engineer with diverse wealth of experience in developing customer-facing products at{' '}
        <ExternalLink href={FACEBOOK_LINK}>Facebook</ExternalLink> and{' '}
        <ExternalLink href={AMAZON_LINK}>Amazon</ExternalLink>, as well as building technology for
        biomedical research! Please feel free to connect with me through any of the avenues below.
      </DescriptionContainer>
      <IconContainer>
        {fontAwesomeIcons.map(({ icon, link }) => (
          <FontAwesomeLink key={link} icon={icon} link={link} />
        ))}
      </IconContainer>
    </>
  )
}
