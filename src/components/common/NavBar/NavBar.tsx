import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import * as S from "./style";

function NavBar() {
  const [currentTab, setCurrentTab] = useState("홈");
  const { pathname } = useLocation();

  const tabs = [{ title: "홈", path: "/" }];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLElement;
    if (target.textContent) {
      setCurrentTab(target.textContent);
    }
  };

  return (
    <S.Container isTransparent={pathname === "/"}>
      <S.Nav isCurrentTab={pathname !== "/"}>
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
