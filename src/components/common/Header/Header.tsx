import React from "react";

import logo from "@/assets/logo_kart.png";
import { ReactComponent as Tmi } from "@/assets/tmi_logo_default_b.svg";
import * as S from "./style";

function Header() {
  return (
    <div>
      <S.Container>
        <S.Head>
          <S.HeadLeft>
            <div>
              <img src={logo} alt="카트라이더 로고" />
            </div>
            <div>
              <Tmi />
            </div>
          </S.HeadLeft>
          <S.HeadRight>
            <a
              href="https://kart.nexon.com/Main/Index.aspx"
              target="_blank"
              rel="noreferrer noopener"
            >
              카트라이더 홈페이지 바로가기
            </a>
          </S.HeadRight>
        </S.Head>
      </S.Container>
    </div>
  );
}

export default Header;
