
<h1 align="middle">2022 원티드 프리온보딩 프론트엔드 코스 기업과제 - 넥슨코리아</h1>
<p align="middle">React와 OpenAPI로 구현하는 카트라이더 전적조회 애플리케이션</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-yellow?style=flat-square" alt="template version"/>
  <a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

<img width="1676" alt="Screen Shot 2022-06-30 at 17 17 52" src="https://user-images.githubusercontent.com/21965795/176628414-a2810a58-a981-42d5-b088-004d166df836.png">

<br/>

## 🔥 소개 ( [Demo](https://wanted-codestates-project-2.vercel.app/) )

**카트라이더 전적 검색 애플리케이션은 카트라이더 유저를 검색하고 최근 전적과 통계를 확인해볼 수 있는 데스크탑 애플리케이션입니다.**

이 프로젝트는 원티드 프리온보딩 프론트엔드 코스에서 개인 과제로 주어져 진행하게된 프로젝트입니다. 카트라이더 OpenAPI를 활용해서 유저의 닉네임을 검색해 해당 유저의 정보와 최근 전적을 계산한 결과를 시각적인 통계로 보여줄 수 있도록 구현했습니다. 또한 도메인의 특성을 고려해서 애니메이션을 최대한 적용했습니다.

<br />


## 📚 기술 스택

| Typescript | React.js |  SWR   |  Styled-Components   | 
| :--------: | :--------: | :------: | :-----: |
|  <img src="https://user-images.githubusercontent.com/21965795/174472604-4e0c144f-4500-4cc6-80b7-3dd29c907171.png" width="100px"/> |  <img src="https://user-images.githubusercontent.com/21965795/176630651-1248191d-432c-45ac-b876-9e5ff54e36f9.png" width="100px" > | <img src="https://user-images.githubusercontent.com/21965795/176630663-4053651d-581c-4855-84a2-51fecb6f6614.png" width="100px"/> |<img src="https://user-images.githubusercontent.com/21965795/176630662-2d123d45-d642-409b-b448-503a0d9810d8.png"  width="100px"/>|

<br />

## 🌲 디렉터리 구조

```![user](https://user-images.githubusercontent.com/21965795/176655746-4290bba7-6626-4510-8724-f558474628c3.gif)

├── public            
└── src
    ├── @types        // 타입
    ├── assets        // 정적 파일
    ├── components
    │   └── common    // 공통 컴포넌트
    ├── hooks
    │   └── apis      // SWR의 hooks
    ├── pages
    ├── services      // API 함수
    ├── shared
    │   ├── constant  // 공통 상수
    │   ├── data      // Meta 데이터
    │   └── utils     // 공통 함수
    └── styles        // 전역 스타일 및 스타일 변수
```


<br />

## ⚙️ 주요 내용

### ✅ SWR을 사용해서 서버상태 관리

요구 사항을 구현하기 위해 필요한 API 요청이 많지 않아서 최대한 쉽게 사용할 수 있고 캐시를 활용할 수 있는 SWR을 채택해서 사용했습니다.

### ✅ 게임 도메인을 고려해 애니메이션을 최대한 활용

![main](https://user-images.githubusercontent.com/21965795/176651665-395accb9-ac84-49d7-9b90-6e41262577c6.gif)
![user](https://user-images.githubusercontent.com/21965795/176655855-1ef25361-7bd2-4349-9beb-4247970348ad.gif)

게임 도메인을 고려해서 동적인 요소가 최대한 포함되었으면 하는 생각이 있었습니다. 그래서 구현 시에 애니메이션을 최대한 적용하기 위해 노력했습니다.

### ✅ 전적 통계를 위한 Circular Progress Bar 구현

<img width="469" alt="Screen Shot 2022-06-30 at 19 11 31" src="https://user-images.githubusercontent.com/21965795/176653596-5af83c06-3dbf-414c-b418-b89942e791d2.png">

유저의 전적 통계를 보여주기 위한 컴포넌트로 Circular Progress Bar를 사용하기로 결정했습니다. 이를 react-circular-progressbar와 같은 라이브러리를 사용하는 방법도 있었지만 저는 구현 및 동작 방법을 이 기회에 파악해보고자 직접 구현을 해서 사용했습니다.


### ✅ Chart.js를 활용해서 최근 순위 히스토리 구현

<img width="622" alt="Screen Shot 2022-06-30 at 19 11 21" src="https://user-images.githubusercontent.com/21965795/176653478-8e679199-8d5f-4e43-8162-d03d6e8047c0.png">

유저의 최근 순위 히스토리를 차트로 보여주기 위해서 차트 라이브러리 중에 chart.js와 d3.js를 후보로 두고 고민했습니다. 하지만 현재 차트로 구현해야할 기능이 한정적이라고 판단해서 러닝 커브가 상대적으로 낮은 chart.js를 채택했습니다. 그래서 chart.js와 react-chartjs-2를 사용해 유저의 순위 히스토리 컴포넌트를 구현했습니다.

### ✅ 메인 화면에 불필요한 페이지를 Lazy Loading 처리

배포된 애플리케이션을 LightHouse로 측정하고 불필요한 Javascript 파일이 있다는 진단을 받았습니다. 이를 분석해본 결과, 메인 페이지에서는 사용하지 않는 chart.js등과 같은 의존성을 메인 페이지와 함께 로드하고 있었고 이를 개선할 필요가 있다고 판단했습니다. 그래서 메인 페이지가 아닌 페이지들을 Lazy Loading 처리하고 메인 페이지가 모두 렌더링된 다음에 로드하도록 최적화했습니다. 이를 통해서 LightHouse의 Performance 지수를 개선했습니다.

```tsx
import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Layout from "@/components/common/Layout/Layout";

const LazyUserDetail = lazy(() => import("@/pages/UserDetail"));
const LazyNotFound = lazy(() => import("@/pages/NotFound"));

function App() {
  useEffect(() => {
    import("@/pages/UserDetail");
    import("@/pages/NotFound");
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users/:nickname"
            element={
              <Suspense fallback="...">
                <LazyUserDetail />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback="...">
                <LazyNotFound />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
```


<br />

## 🎨 LightHouse 측정
![Screen Shot 2022-06-30 at 17 44 31](https://user-images.githubusercontent.com/21965795/176633973-1a682642-7a87-4e00-931e-1743f1dbc3ff.png)

<br />

## 🌐 링크
- [Web VSCode](https://github.dev/Leo-Xee/wanted-codestates-project-2)
- [NEXON OpenAPI](https://developers.nexon.com/kart)

