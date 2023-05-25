import React from "react";
import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
  weight?: string;
}

const TitleWrapper = styled.h1<TitleProps>`
  font-weight: ${(props) => (props.weight === "bold" ? 1000 : 400)};
`;

const Title = ({ children, weight }: TitleProps) => {
  console.log(weight);

  return (
    <TitleWrapper
      style={{
        fontWeight:
          (weight === "light" && "400") ||
          (weight === "regular" && "600") ||
          (weight === "bold" ? "800" : ""),
      }}
    >
      {children}
    </TitleWrapper>
  );
};

export default Title;
