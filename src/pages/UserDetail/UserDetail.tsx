import React from "react";

import { useParams } from "react-router-dom";
// import UserProfile from "@/components/UserProfile";
// import { SOLO } from "@/constant/matchType";
// import Spinner from "@/components/Spinner";
// import Simulator from "@/components/Simulator";
// import TotalRecord from "@/components/TotalRecord";
// import MatchList from "@/components/MatchList";
import * as S from "./style";

function UserDetail() {
  const { id } = useParams();

  console.log(id);

  // const [matchType, setMatchType] = useState(SOLO);

  // if (loading) return <Spinner />;
  // if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <S.Container>
      Hello
      {/* <UserProfile user={user} matchType={matchType} setMatchType={setMatchType} />
      <Simulator user={user} />
      <div>
        <TotalRecord user={user} matchType={matchType} />
      </div>
      <MatchList user={user} matchType={matchType} /> */}
    </S.Container>
  );
}

export default UserDetail;
