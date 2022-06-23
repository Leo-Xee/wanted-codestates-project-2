import React, { useRef } from "react";

import { ReactComponent as Tmi } from "@/assets/tmi_logo_default.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function Search() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const input = inputRef.current.value.replace(/ /g, "");
      navigate(`/users/${input}`);
    }
  };

  return (
    <S.Form>
      <label htmlFor="searchType">
        <select id="searchType">
          <option value="유저">유저</option>
        </select>
      </label>
      <label htmlFor="search">
        <input id="search" type="search" placeholder="카트라이더 닉네임을 입력" ref={inputRef} />
      </label>
      <button type="submit" onClick={handleClick}>
        <Tmi />
      </button>
    </S.Form>
  );
}

export default Search;
