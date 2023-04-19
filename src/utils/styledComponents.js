import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainLayout = styled.div`
  margin-left: 148px;
  padding: 55px 55px 0px 55px;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.p`
  font-size: 50px;
  color: #2c2c31;
  margin-top: 0;
  margin-bottom: 20px;
  width: 562px;
`;

export const Title = styled.p`
  font-size: 15px;
  margin: 0;
  font-weight: bold;
`;

export const Error = styled.p`
  font-size: 15px;
  margin: 0;
  font-weight: bold;
  color: red;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #2c2c31;
  cursor: pointer;
  border: 1px solid #2c2c31;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: 80px;
`;

export const SideNavigation = styled.nav`
  width: 100px;
  height: 100%;
  background-color: #2c2c31;
  position: fixed;
  top: 0;
  left: 0;
  padding: 55px 24px;
`;

export const NavigationItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const NavLinkElement = styled(NavLink)`
  &:hover h3,
  &:focus h3,
  &.active h3 {
    text-decoration: underline;
  }
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavigationHeader = styled.h1`
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin: 0;
`;

export const NavigationItem = styled.h3`
  color: #fff;
  font-size: 15px;
  margin: 0px;
  padding: px;
`;

export const Header = styled.h2`
  color: #2c2c31;
  margin-top: 0;
  margin-bottom: 40px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Window = styled.div`
  width: 700px;
  height: 500px;
  position: relative;
  background: #fff;
  borderradius: 15px;
  padding: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 25px;
`;

export const FormPost = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: #eef3f6;
  border-radius: 5px;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  gap: 10px;
`;

export const Picture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

export const PicturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
