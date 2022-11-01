import React from "react";

import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mark M",
      image: "https://picsum.photos/200",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
