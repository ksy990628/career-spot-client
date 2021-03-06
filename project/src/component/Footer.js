import React from "react";
import styled from "styled-components";
import {TitleLogo} from "./Icons";
import {Link} from "react-router-dom";

const Foot = styled.div`
  height: 7vw;
  border-top: solid 1px #747474;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const FootText = styled.div`
  font-size: 1.4vw;
  color: grey;
  flex-grow:2;
`
const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
   display: flex;
  align-items: center;
  justify-content: center;
  FLEX-GROW: 1.5;
`

const Footer = () => {
    return (
        <Foot>
            <Logo><Link to={"/"} style={{ textDecoration: 'none', color:"black"}}><TitleLogo/></Link><Link to={"/"} style={{ textDecoration: 'none', color:"black"}}>  커리어스팟</Link></Logo>
            <FootText>회사소개 이용안내 개인정보처리방침 Q/A 고객센터 신고하기</FootText>
        </Foot>
    );
}

// 푸터. 홈페이지의 맨 밑에 들어가는 부분입니다.

export default Footer;