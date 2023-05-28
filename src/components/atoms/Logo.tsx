import Image from 'next/image'
import styled from 'styled-components'
import brandLogo from '@/assets/brand/brandLogo.png'
import Link from 'next/link'

const LogoWrapper = styled.div`
  cursor: pointer;
`

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href="/">
        <Image className="brand" src={brandLogo} alt="Discordity" width={180} />
      </Link>
    </LogoWrapper>
  )
}

export default Logo
