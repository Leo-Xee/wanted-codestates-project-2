import React from "react";

import Bazzi from "@/assets/covid_left.png";
import DaoBackground from "@/assets/main_left_bg.png";
import Dao from "@/assets/covid_right.png";
import BazziBackground from "@/assets/main_right_bg.png";
import * as S from "./style";

function HomeBackground() {
  return (
    <S.Container>
      <S.Bazzi src={Bazzi} alt="휴대폰 보는 마스크 쓴 배찌" />
      <S.Dao src={Dao} alt="화이팅 하는 마스크 쓴 다오" />
      <S.BazziBg src={DaoBackground} alt="배찌의 배경" />
      <S.DaoBg src={BazziBackground} alt="다오의 배경" />
    </S.Container>
  );
}

export default HomeBackground;
