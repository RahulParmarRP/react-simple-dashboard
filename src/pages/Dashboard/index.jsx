import React, { useEffect } from "react";
import DataTable from "../../components/DataTable";
import { getUsers } from "../../services/users-services";
import { Col, Row, Container } from "react-bootstrap";
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
    <Container>
      <Row className="mt-5">
        <Col>
          <DataTable data={users} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
