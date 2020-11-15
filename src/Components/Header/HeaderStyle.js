import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const optionStyle = css`
  padding: 10px 25px;
  font-size: 20px;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    padding: 10px 10px;
    font-size: 16px;
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  ${optionStyle}
`;

export const OptionDiv = styled.div`
  ${optionStyle}
`;

export const DisplayNameContainer = styled.span`
  display: flex;
  margin-top: 5px;
  font-weight: bolder;
`;
