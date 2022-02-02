import styled from "styled-components";

const Title = styled.h1`
  font-size: 40px;
  margin: 75px 0 0 25px;
`;
const HeaderEl = styled.header`
  width: 414px;
  height: 147px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SideMenu = styled.div`
  margin-top: 75px;
  text-align: right;
  img {
    width: auto;
    height: auto;
    vertical-align: middle;
    cursor: pointer;
  }
  img:last-child {
    margin-right: 25px;
  }
`;

const Header = () => {
  return (
    <HeaderEl>
      <Title>TOP</Title>
      <SideMenu>
        <img src="images/logo.png" alt="LOGO" />
        <img src="images/dot-menu.png" alt="MENU" />
      </SideMenu>
    </HeaderEl>
  );
};

export default Header;
