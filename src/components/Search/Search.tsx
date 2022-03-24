import React from "react";

import { ReactComponent as Tmi } from "@/assets/tmi_logo_default.svg";
import * as S from "./style";

function Search() {
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
      <S.Form>
        <label htmlFor="searchType">
          <select id="searchType">
            <option value="유저">유저</option>
            <option value="카트">카트</option>
            <option value="트랙">트랙</option>
          </select>
        </label>
        <label htmlFor="search">
          <input
            id="search"
            type="search"
            placeholder="카트라이더 닉네임을 입력"
          />
        </label>
        <button type="submit">
          <Tmi />
        </button>
      </S.Form>
    </S.Container>
  );
}

export default Search;
