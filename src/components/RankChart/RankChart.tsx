import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

import { Match } from "api";
import useCalcMatchList from "@/hooks/useCalcMatchList";
import * as S from "./style";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type RankChartProps = {
  matchList: Match[];
};

function RankChart({ matchList }: RankChartProps) {
  const { rankListAll, rankListLast, rankAverageAll, rankAverageLast } =
    useCalcMatchList(matchList);

  const options: ChartOptions<"line"> = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            return ` 순위 : ${ctx.parsed.y}위`;
          },
          title: (item) => {
            return `이전 ${item[0].parsed.x + 1}경기`;
          },
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        display: false,
        reverse: true,
      },
      y: {
        suggestedMin: 1,
        suggestedMax: 8,
        reverse: true,
      },
    },
  };

  const data: ChartData<"line"> = {
    labels: rankListLast.map((_, idx) => idx),
    datasets: [
      {
        data: rankListLast.map((rank) => rank),
        borderColor: "#07f",
        pointBackgroundColor: "#07f",
        borderWidth: 2,
      },
    ],
  };

  return (
    <S.Container>
      <S.Title>
        <span>
          <S.Highlight>순위변동</S.Highlight> 추이
        </span>
        <S.Detail>
          <span>
            지난 {rankListAll.length}경기 <S.Highlight>{rankAverageAll.toFixed(2)}위</S.Highlight>
          </span>
          <span>
            최근 {rankListLast.length}경기 <S.Highlight>{rankAverageLast.toFixed(2)}위</S.Highlight>
          </span>
        </S.Detail>
      </S.Title>
      <Chart type="line" options={options} data={data} width="600px" height="200px" />
    </S.Container>
  );
}

export default RankChart;
