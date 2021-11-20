import React, { useEffect } from "react";
import NavbarHeader from "../../components/NavbarHeader";
import DataTable from "../../components/DataTable";
import { getUsers } from "../../services/users-services";
const Dashboard = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <NavbarHeader />
      <DataTable data={users} />
    </div>
  );
};

export default Dashboard;
