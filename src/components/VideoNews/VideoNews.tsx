import React from "react";

import * as S from "./style";

function VideoNews() {
  const videoData = [
    {
      title: "[카트라이더: 드리프트] 게임플레이",
      thumbNail: "https://img.youtube.com/vi/7r55ajA4nOE/1.jpg",
      link: "https://www.youtube.com/watch?v=7r55ajA4nOE",
      owner: "넥슨",
    },
    {
      title: "7월에서야 공개된 TMI의 진짜 목적",
      thumbNail: "https://img.youtube.com/vi/IgIzFjm_EC8/1.jpg",
      link: "https://www.youtube.com/watch?v=IgIzFjm_EC8",
      owner: "리버스",
    },
    {
      title: "여러분들도 여기에 『플레이 기록 공개",
      thumbNail: "https://img.youtube.com/vi/_YBOOiU-1OU/1.jpg",
      link: "https://www.youtube.com/watch?v=_YBOOiU-1OU",
      owner: "형독방송",
    },
  ];
  return (
    <S.Container>
      <S.Title>카트라이더 TMI 영상</S.Title>
      <S.VideoList>
        {videoData.map((video, idx) => (
          <S.VideoItem key={idx}>
            <a href={video.link} target="_blank" rel="noreferrer noopener">
              <S.VideoImg src={video.thumbNail} alt={video.title} />
              <S.VideoTitle>{video.title}</S.VideoTitle>
              <S.VideoOwner>{video.owner}</S.VideoOwner>
            </a>
          </S.VideoItem>
        ))}
      </S.VideoList>
    </S.Container>
  );
}

export default VideoNews;
