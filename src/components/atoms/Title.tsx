import React from "react";
import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
  fontSize?: string;
  weight?: string;
  className?: string;
}

const TitleWrapper = styled.h1<TitleProps>`
  text-align: center;

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Title = ({ children, weight, fontSize, className }: TitleProps) => {
  console.log(weight);

  return (
    <TitleWrapper
      className={className && className}
      style={{
        fontWeight:
          (weight === "light" && "400") ||
          (weight === "regular" && "600") ||
          (weight === "bold" ? "800" : ""),

        fontSize: fontSize ? fontSize : "20px",
      }}
    >
      {children}
    </TitleWrapper>
  );
};

export default Title;
