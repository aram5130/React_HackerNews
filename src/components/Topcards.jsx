import React from "react";
import styled from "styled-components";

const Title = styled.div`
  padding: 11px 0 25px 25px;
  font-size: 25px;
  font-weight: 700;
`;

const CardEl = styled.div`
  display: flex;
  align-items: center;
`;

const TopCard = styled.div`
  width: 247px;
  height: 322px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3em;
  color: #fff;
  background: #5255be;
  margin: 0 14px 0 27px;
  padding: 50px 29px 24px 28px;
  border-radius: 50px;
  h3 {
    width: 190px;
  }
  p {
    font-size: 15px;
    font-weight: 500;
    opacity: 55%;
  }
  span {
    font-size: 13px;
    font-weight: 500;
    opacity: 55%;
    margin-right: 10px;
    box-sizing: border-box;
  }
`;
const Btn = styled.button`
  width: 42px;
  height: 42px;
  background: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  img {
    width: auto;
  }
`;
const Card = styled.div`
  width: 220px;
  height: 287px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3em;
  color: #000;
  background: #dbdcef;
  margin: 0 14px 0 14px;
  padding: 50px 29px 20px 28px;
  border-radius: 50px;

  h3 {
    margin: 0;
  }
  p {
    font-size: 15px;
    font-weight: 500;
    opacity: 55%;
  }
  span {
    font-size: 13px;
    font-weight: 500;
    opacity: 55%;
    margin-right: 10px;
    box-sizing: border-box;
  }
`;
const BtnSmall = styled.button`
  width: 42px;
  height: 42px;
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  float: right;
`;

function Topcards() {
  return (
    <>
      <Title>Today's TOP 5</Title>
      <div className="top_container">
        <CardEl>
          <TopCard>
            <div>
              <h3>The Windows 11 taskbar is an annoying step backward</h3>
              <p>by username</p>
            </div>
            <div>
              <span>P.164</span>
              <span>C.156</span>
              <Btn>
                <img src="images/Arow_main.png" alt="arow" />
              </Btn>
            </div>
          </TopCard>
          <Card>
            <div>
              <h3>The Windows 11 taskbar is an annoying step backward</h3>
              <p>by username</p>
            </div>
            <div>
              <span>P.164</span>
              <span>C.156</span>
              <BtnSmall>
                <img src="images/Arow.png" alt="arow" />
              </BtnSmall>
            </div>
          </Card>
        </CardEl>
      </div>
    </>
  );
}

export default Topcards;
