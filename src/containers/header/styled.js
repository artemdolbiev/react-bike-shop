import styled from "styled-components";
import HeaderBg from 'assets/header-bg.png';

export const HeaderSC = styled.header`
  height: 100vh;
  width: 100%;
  background-image: url(${HeaderBg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Absolute = styled.div`
  position: absolute;
  right: 0px;
  bottom: 174px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 5;
`

export const HeaderText = styled.h1`
  font-family: "Roboto";
  font-weight: ${({weight}) => (weight ? weight : 400)};
  font-size: ${({size}) => (size ? size : "55px")};
  text-transform: uppercase;
  text-align: end;
  margin-top: 0;
  margin-bottom: ${({space}) => (space ? space : "10px")};
  color: ${({red}) => (red ? "#E6110C" : "#FFF")};
`