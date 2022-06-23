import { Match } from "api";

function useCalcMatchList(matchList: Match[]) {
  const calcRecord = () => {
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
  };

  const rankList = matchList.map((match) => {
    const RETIRED_RANK = 8;

    if (Number(match.player.matchRank) > RETIRED_RANK) {
      return RETIRED_RANK;
    }
    return Number(match.player.matchRank);
  });

  const calcRankAverage = (list: number[]): number => {
    const totalRank = list.reduce((prev, cur) => {
      return prev + Number(cur);
    }, 0);

    return totalRank / list.length;
  };

  return {
    record: calcRecord(),
    rankListAll: rankList,
    rankListLast: rankList.slice(0, 50),
    rankAverageAll: calcRankAverage(rankList),
    rankAverageLast: calcRankAverage(rankList.slice(0, 50)),
  };
}

export default useCalcMatchList;
