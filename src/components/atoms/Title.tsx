import React from "react";
import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
  fontSize?: string;
  weight?: string;
  className?: string;
  center?: boolean;
}

const TitleWrapper = styled.h1<TitleProps>`
  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Title = ({
  children,
  weight,
  fontSize,
  className,
  center,
}: TitleProps) => {
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
        textAlign: center ? "center" : "start",
      }}
      center
    >
      {children}
    </TitleWrapper>
  );
};

export default Title;
