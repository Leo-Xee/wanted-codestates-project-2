import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function UserDetail() {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("nick"));

  useEffect(() => {}, []);

  return <div>UserDetail</div>;
}

export default UserDetail;
