import React, { useEffect } from "react";
import axios from "axios";

function UserDetail() {
  const getUser = async () => {
    const data = await axios.get("/kart/v1.0/users/nickname/법사케피", {
      headers: {
        Authorization: String(process.env.REACT_APP_API_KEY),
      },
    });
    console.log(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return <div>UserDetail</div>;
}

export default UserDetail;
