import React from "react";
import { navigate, Link } from "gatsby";

import styled from "@emotion/styled";
//** @jsx jsx **/
import { jsx } from "@emotion/core";
import { withTheme } from "emotion-theming";

import { SIZES } from "../styles/constants";

import Logo from "components/Logo"
import Icon from "components/Icon"
import { StyledLink } from "./elements";


const Header = styled.div`
  background-color: ${props => props.theme.colors.headerBackground};
  height: 60px;
  display: grid;
  grid-template-areas: "... nav ...";
  grid-template-columns: 1fr minmax(240px, ${SIZES.maxWidth}) 1fr;
  grid-gap: 10px;
  align-items: center;
  border-width: 1px;
  border-color: ${props => props.theme.colors.quarternary};
  border-style: solid;
`
const Nav = styled.div`
  grid-area: nav;
  max-width: ${SIZES.maxWidth};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  `

  const LogoSection = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`
const LogoText = styled.span`
  color: ${props => props.color};
  margin-left: 5px;
  @media (max-width: 400px) {
    display: none;
  }
`
const NavIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  * + * {
    margin-left: 10px;
  }
`

const Navbar = ({ theme, toggleTheme }) => (
    <Header>
      <Nav>
        <LogoSection onClick={() => navigate("/app")}>
          <Logo color={theme.colors.logo} />
          <LogoText color={theme.colors.primary}>SOL</LogoText>{" "}
          <LogoText color={theme.colors.secondary}>JOURNAL</LogoText>
        </LogoSection>
        <NavIcons>
              <StyledLink >
                <Icon name="Edit2" />
                </StyledLink>
                <StyledLink>
                <Icon name="Calendar" />
              </StyledLink>
              <StyledLink to={"/search"}>
                <Icon name="Search" />
              </StyledLink>
              <StyledLink to={"/user"}>
                <Icon name="User" />
              </StyledLink>
              <Icon
                tabindex={0}
                onClick={() => toggleTheme()}
                onKeyPress={() => toggleTheme()}
                name={theme.name === "Dark" ? "Sun" : "Moon"}
              />
        </NavIcons>
      </Nav>
    </Header>
  )

  export default Navbar;