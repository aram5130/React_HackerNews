import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  width: 414px;
  height: 90px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const NavEl = styled.div`
  width: 400px;
  margin: 23px 50px 36px 0;
  font-size: 10px;
  color: #000;
  background: #fff;
  img {
    width: 20px;
  }
  img:hover {
  }
  span :hover {
    color: #338bf2;
  }
`;

const BottomNav = () => {
  return (
    <React.Fragment>
      <Navbar>
        <div className="nav-link">
          <NavLink to="/TOP" activeClassName="active">
            <NavEl>
              <img src="images/Nav_Top.png" alt="Nav_Top" />
              <br />
              <sapn>TOP</sapn>
            </NavEl>
          </NavLink>
          <NavLink to="/NEW" activeClassName="active">
            <NavEl>
              <img src="images/Nav_New.png" alt="Nav_New" />
              <br />
              <sapn>NEW</sapn>
            </NavEl>
          </NavLink>
          <NavLink to="/ASK" activeClassName="active">
            <NavEl>
              <img src="images/Nav_Ask.png" alt="Nav_Ask" />
              <br />
              <sapn>ASK</sapn>
            </NavEl>
          </NavLink>
          <NavLink to="/SHOW" activeClassName="active">
            <NavEl>
              <img src="images/Nav_Show.png" alt="Nav_Show" />
              <br />
              <sapn>SHOW</sapn>
            </NavEl>
          </NavLink>
          <NavLink to="/JOBS" activeClassName="active">
            <NavEl>
              <img src="images/Nav_Job.png" alt="Nav_Job" />
              <br />
              <sapn>JOBS</sapn>
            </NavEl>
          </NavLink>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default BottomNav;
