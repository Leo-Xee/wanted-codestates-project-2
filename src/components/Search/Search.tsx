import React, { FormEvent, useRef, useState } from "react";

import { ReactComponent as Tmi } from "@/assets/tmi_logo_default.svg";
import { useNavigate } from "react-router-dom";
import userService from "@/services/userService";
import * as S from "./style";
import Modal from "../common/Modal";

function Search() {
  const navigate = useNavigate();
  const [isModalOn, setIsModalOn] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const input = inputRef.current.value.trim();

      userService
        .getUserIdByNickname(input)
        .then(() => {
          navigate(`/users/${input}`);
        })
        .catch(() => setIsModalOn(true));
    }
  };

  return (
    <S.Form onSubmit={submitHandler}>
      {isModalOn && (
        <Modal message="일치하는 유저가 없습니다." onClick={() => setIsModalOn(false)} />
      )}
      <label htmlFor="searchType">
        <select id="searchType">
          <option value="유저">유저</option>
        </select>
      </label>
      <label htmlFor="search">
        <input id="search" type="search" placeholder="S1법사케피를 입력해보세요." ref={inputRef} />
      </label>
      <button aria-label="유저 검색" type="submit">
        <Tmi />
      </button>
    </S.Form>
  );
}

export default Search;
