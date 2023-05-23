import Image from "next/image";
import styled from "styled-components";
import brandLogo from "/src/assets/brand/brandLogo.png";

const LogoWrapper = styled.div``;

const Logo = () => {
  return (
    <LogoWrapper>
      <Image className="brand" src={brandLogo} alt="Discordity" width={180} />
    </LogoWrapper>
  );
};

export default Logo;
