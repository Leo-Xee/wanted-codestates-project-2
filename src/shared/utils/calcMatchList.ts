import { Match } from "api";

// 리스트를 받아서 win, lose, retire, finish, character을 추출
const calcMatchList = (matchList: Match[]) => {
  let win = 0;
  let lose = 0;
  let retire = 0;
  let finish = 0;

  const { character } = matchList[0].player;

  matchList.forEach((match) => {
    if (match.player.matchWin === "1") {
      win += 1;
    } else {
      lose += 1;
    }

    if (match.player.matchRetired === "1") {
      retire += 1;
    } else {
      finish += 1;
    }
  });

  return { win, lose, retire, finish, character };
};

export default calcMatchList;
