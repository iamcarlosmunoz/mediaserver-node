import styled from "styled-components";
import { theme } from "../../styles/index";

export const Nav = styled.nav`
  width: 10em;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    height: 6em;
    position: fixed;
    bottom: 0;
  }
`;

export const List = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: ${theme.colors.second};
  border-radius: 20px;
  box-shadow: 0px 0px 0px 0.2em ${theme.colors.textLight};
  margin: 0px 2em;
  padding: 1em;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    border-radius: 0px;
  }
`;

export const Item = styled.li`
  margin-top: ${({ margin }) => (margin ? "0.5em" : "0")};

  & > a {
    background-color: ${({ active }) =>
      active ? theme.colors.textLight : theme.colors.second};
  }

  &:hover a {
    background-color: ${theme.colors.primary};
  }

  &:hover path {
    fill: ${theme.colors.textDark};
  }

  & path {
    fill: ${({ active }) =>
      active ? theme.colors.second : theme.colors.textLight};
    transition: fill 0.3s ease;
  }

  & svg {
    width: 3em;
    height: 3em;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const NavLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.5em;
  border-radius: 10px;
  transition: background-color 0.3s ease;
`;
