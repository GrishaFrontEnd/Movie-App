import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../UI";

interface IHeader {
  name: string;
  btnText: string;
}

let Title = styled.h2``;
let Name = styled.h3`
  margin-right: 15px;
`;
let Button = styled.button``;
let HeaderWrapper = styled.header`
  min-height: 6vh;
  background-color: #704e93;
  color: white;
`;
let AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

let Header: React.FC<IHeader> = ({ name, btnText }) => {
  return (
    <HeaderWrapper>
      <FlexWrapper>
        <Title>Movie App</Title>
        <AuthWrapper>
          <Name>{name}</Name>
          <Button>{btnText}</Button>
        </AuthWrapper>
      </FlexWrapper>
    </HeaderWrapper>
  );
};

export default Header;
