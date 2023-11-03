import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = () => {
  return (
    <SideBar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </SideBar>
  );
};

const SideBar = styled.nav`
  display: flex;
  gap: 25px;
  width: 200px;
  padding: 40px 20px;
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: #00ffff;
    color: black;
  }
  &:hover:not(.active) {
    background-color: #99ffff;
  }
`;
