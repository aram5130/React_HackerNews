import React from "react";
import styled from "styled-components";

const Title = styled.div`
  padding: 11px 0 25px 25px;
  font-size: 25px;
  font-weight: 700;
`;
const ListCardEl = styled.div`
  width: 414px;
`;

const ListCard = styled.div`
  width: 364px;
  height: 102px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
  display: flex;
  margin: 0;
  h3 {
    width: 255px;
  }
  p {
    font-size: 13px;
    opacity: 55%;
  }
  span {
    text-align: left;
    vertical-align: middle;
    font-size: 13px;

    opacity: 55%;
  }
  img {
    width: 10px;
    height: 20px;
    margin-top: 44px;
    cursor: pointer;
  }
`;
const ListNum = styled.div`
  font-size: 36px;
  color: #80b8fa;
  font-weight: 700;
  margin: 30px;
`;

function Toplist() {
  return (
    <>
      <Title>Top List</Title>
      <div className="list_container">
        <ListCardEl>
          <ListCard>
            <ListNum>6</ListNum>
            <div className="list_text">
              <h3>I'm keeping a job search diary on my blog</h3>
              <p>by username</p>
              <span>P.164</span>
              <span>C.156</span>
            </div>
            <div>
              <img src="images/Arow_s.png" alt="arow_s" />
            </div>
          </ListCard>
        </ListCardEl>
      </div>
    </>
  );
}

export default Toplist;
