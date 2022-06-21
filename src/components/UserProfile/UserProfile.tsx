import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaUser, FaUsers, FaBell } from "react-icons/fa";
import { IoReloadSharp, IoShareSocial } from "react-icons/io5";

import { SOLO, TEAM } from "@/shared/constant/matchType";
import { UserInfo } from "api";
import * as S from "./style";

type UserProfileProps = {
  user: UserInfo;
  matchType: string;
  setMatchType: React.Dispatch<React.SetStateAction<string>>;
};

function UserProfile({ user, matchType, setMatchType }: UserProfileProps) {
  console.log(user);

  const character = matchType === SOLO ? user.solo?.character : user.team?.character;

  return (
    <S.Container>
      <S.Notice>
        <BsFillInfoCircleFill size={14} />
        <span>카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다.</span>
      </S.Notice>
      <S.Profile>
        <img
          src={`https://static.api.nexon.co.kr/kart/latest/character/${character}.png`}
          alt="캐릭터"
        />
        <S.ProfileContent>
          <h1>{user.name}</h1>
          <S.BtnContainer>
            <S.MatchBtnContainer>
              <S.MatchBtn
                type="button"
                isSelected={matchType === SOLO}
                onClick={() => setMatchType(SOLO)}
              >
                <FaUser size={14} />
                <span>개인전</span>
              </S.MatchBtn>
              <S.MatchBtn
                type="button"
                isSelected={matchType === TEAM}
                onClick={() => setMatchType(TEAM)}
              >
                <FaUsers size={18} />
                <span>팀전</span>
              </S.MatchBtn>
            </S.MatchBtnContainer>
            <S.UtilBtnContainer>
              <S.UtilBtn type="button">
                <IoReloadSharp size={14} />
                <span>전적갱신</span>
              </S.UtilBtn>
              <S.UtilBtn type="button">
                <FaBell size={14} />
                <span>신고하기</span>
              </S.UtilBtn>
              <S.UtilBtn type="button">
                <IoShareSocial size={14} />
                <span>공유하기</span>
              </S.UtilBtn>
            </S.UtilBtnContainer>
          </S.BtnContainer>
        </S.ProfileContent>
      </S.Profile>
    </S.Container>
  );
}

export default UserProfile;
