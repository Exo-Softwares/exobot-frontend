import { HeroPillWrapper } from './HeroPill.styled'

interface HeroPillProps {
  content: string
}

const HeroPill = ({ content }: HeroPillProps) => {
  return (
    <HeroPillWrapper>
      <div className="ball" />
      {content}
    </HeroPillWrapper>
  )
}

export default HeroPill
