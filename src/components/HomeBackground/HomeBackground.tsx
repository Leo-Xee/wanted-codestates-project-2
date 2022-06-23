import React from "react";

import Bazzi from "@/assets/covid_left.png";
import DaoBackground from "@/assets/main_left_bg.png";
import Dao from "@/assets/covid_right.png";
import BazziBackground from "@/assets/main_right_bg.png";
import Search from "../Search";
import * as S from "./style";

function HomeBackground() {
  return (
    <S.Container>
      <S.Title>
        <p>
          <a
            href="https://developers.nexon.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="api"
          >
            넥슨 오픈API 기반
          </a>
        </p>
        <p className="main">
          카트라이더 <span>전적</span> 검색
        </p>
        <p className="message">사회적거리두기</p>
      </S.Title>
      <S.Animate>
        <S.Bazzi>
          <S.BazziCharacter src={Bazzi} alt="휴대폰 보는 마스크 쓴 배찌" />
          <S.BazziBg src={DaoBackground} alt="배찌의 배경" />
        </S.Bazzi>
        <Search />
        <S.Dao>
          <S.DaoCharacter src={Dao} alt="화이팅 하는 마스크 쓴 다오" />
          <S.DaoBg src={BazziBackground} alt="다오의 배경" />
        </S.Dao>
      </S.Animate>
    </S.Container>
  );
}

export default HomeBackground;
