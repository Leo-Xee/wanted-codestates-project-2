import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

function NavBar() {
  const [currentTab, setCurrentTab] = useState("홈");

  const tabs = [
    { title: "홈", path: "/" },
    { title: "랭킹", path: "/user" },
    { title: "카트", path: "/" },
    { title: "트랙", path: "/" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLElement;
    if (target.textContent) {
      setCurrentTab(target.textContent);
    }
  };

  return (
    <S.Container>
      <S.Nav>
        {tabs.map((tab, idx) => (
          <li key={idx}>
            <div>
              <Link
                to={tab.path}
                onClick={handleClick}
                className={currentTab === tab.title ? "focus" : ""}
              >
                {tab.title}
              </Link>
            </div>
          </li>
        ))}
      </S.Nav>
    </S.Container>
  );
}

export default NavBar;
