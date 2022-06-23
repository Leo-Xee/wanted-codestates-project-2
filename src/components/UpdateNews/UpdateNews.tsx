import React from "react";

import * as S from "./style";

function UpdateNews() {
  const updateLogData = [
    {
      content: "내용	날짜 [안내] TMI 1대1 매칭 시뮬레이터, 기록 상위분포 오류 관련",
      date: "2020.02.24",
    },
    {
      content: "[기록실] 11월 TMI 탑랭커 발표",
      date: "2019.12.02",
    },
    {
      content: "[공지] 카트라이더 open api 공개 및 TMI 업데이트",
      date: "2019.11.20",
    },
    {
      content: "[안내] TMI 1대1 매칭 시뮬레이터 오류 관련 - 수정 완료",
      date: "	2019.11.18",
    },
    {
      content: "[기록실] 10월 TMI 탑랭커 발표",
      date: "	2019.11.04",
    },
    {
      content: "[기록실] 9월 TMI 탑랭커 발표",
      date: "	2019.10.01",
    },
  ];

  return (
    <S.Container>
      <S.Title>TMI 업데이트 로그</S.Title>
      <S.Table>
        <S.Header>
          <S.HContent>내용</S.HContent>
          <S.HDate>날짜</S.HDate>
        </S.Header>
        {updateLogData.map((log, idx) => (
          <S.LogItem key={idx}>
            <S.LogContent>{log.content}</S.LogContent>
            <S.LogDate>{log.date}</S.LogDate>
          </S.LogItem>
        ))}
      </S.Table>
    </S.Container>
  );
}

export default UpdateNews;
