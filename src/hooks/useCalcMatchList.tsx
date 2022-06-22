import { Match } from "api";

function useCalcMatchList(matchList: Match[]) {
  let win = 0;
  let lose = 0;
  let retire = 0;
  let finish = 0;
  const total = matchList.length;

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

  return { win, lose, retire, finish, total };
}

export default useCalcMatchList;
