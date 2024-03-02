import { useContext } from "react";
import { FormUsers } from "../formUsers/FormUsers";

const Users = () => {
  const users = useContext(users);

  return (
  <>
  <FormUsers/>
  </>
  )
};

export default Users;
