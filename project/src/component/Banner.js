import React from "react";
import Category from "./Category";
import styled from "styled-components";
import banner from "../img/banner.png";
import { useQuery, gql } from '@apollo/client';


const CATEGORY_QUERY = gql`
    query{
        findCategory{
            category_idx
            category_name
        }
    }
`
const POST_NUMBER = gql`
    query{
      findPost(args:{
        offset:0
        limit:0
        filter:{
          field:""
          operator:""
          value:""
        }
      }){
       count
      } 
    }
`

const WholeBanner = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  height:30vw;
  padding-top: 5%;
  padding-left: 10%;
`
const CategoryCircles = styled.div`
  margin-top: 5%;
  height: 6vw;
`
const TextBox = styled.div`
  color: white;
  font-size: 2.5vw;
  line-height: 3vw;
`
const BoldText = styled.div`
  font-weight: bold;
  font-size: 3.5vw;
  line-height: 4vw;
`
const NumberText = styled.span`
  font-weight: bold;
  text-decoration: underline;
`

const Banner = () => {
    const currentArticle = 363
    //실제 글 갯수를 서버에서 받아오기 전 임시로 사용할 변수. 구현하고 나면 지우자.

    const { data } = useQuery(CATEGORY_QUERY);
    const { data: dataNum } = useQuery(POST_NUMBER);

    return (
        <WholeBanner>
            <TextBox>
                <BoldText>
                    커리어스팟은~~~<br/>
                    지금 하고 있습니다
                </BoldText>
                <br/>
                기타 내용 등 아무내용 넣기<br/>
                <NumberText>{dataNum && dataNum.findPost.count}개</NumberText> 글이 있습니다
            </TextBox>
            <CategoryCircles>
                {data &&
                    data.findCategory.map((t) => (
                        <Category key={t.category_idx} text={t.category_name}/>
                    ))
                }
            </CategoryCircles>
        </WholeBanner>
    );
}

// 헤더 밑, 큰 이미지와 함께 카테고리도 들어간다.

export default Banner;