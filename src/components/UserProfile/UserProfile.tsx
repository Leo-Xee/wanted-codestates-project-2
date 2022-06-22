import { Match, MatchListType } from "api";
import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaUser, FaUsers, FaBell } from "react-icons/fa";
import { IoReloadSharp, IoShareSocial } from "react-icons/io5";

import * as S from "./style";

type UserProfileProps = {
  userName: string;
  lastestMatch: Match;
  matchType: MatchListType;
  setMatchType: React.Dispatch<React.SetStateAction<MatchListType>>;
};

function UserProfile({ userName, lastestMatch, matchType, setMatchType }: UserProfileProps) {
  const { character } = lastestMatch;

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
          <h1>{userName}</h1>
          <S.BtnContainer>
            <S.MatchBtnContainer>
              <S.MatchBtn
                type="button"
                isSelected={matchType === "solo"}
                onClick={() => setMatchType("solo")}
              >
                <FaUser size={14} />
                <span>개인전</span>
              </S.MatchBtn>
              <S.MatchBtn
                type="button"
                isSelected={matchType === "team"}
                onClick={() => setMatchType("team")}
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
