import React, { useEffect } from "react";

import { getUserByNickname } from "@/store/users/usersSlice";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store";

function UserDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  console.log(users);

  useEffect(() => {
    dispatch(getUserByNickname(String(id)));
  }, []);

  return <div>UserDetail</div>;
}

export default UserDetail;
