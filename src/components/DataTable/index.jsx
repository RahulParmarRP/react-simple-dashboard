import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
const DataTable = ({ data }) => {
    const [rows, setRows] = React.useState(data)
    const handleFilter = (filterBy, value) => {
        if (!value) {
            setRows(data)
            return
        }
        const filteredUsers = rows.filter((row) => row[filterBy].toLowerCase().includes(value.trim().toLowerCase()))
        setRows(filteredUsers)
    }
    useEffect(() => { setRows(data) }, [data])
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>
                        <Form.Control
                            type="text"
                            placeholder="Filter by Name"
                            onChange={(e) => handleFilter('name', e.target.value)}
                        />
                    </th>
                    <th>
                        <Form.Control
                            type="text"
                            placeholder="Filter by Username"
                            onChange={(e) => handleFilter('username', e.target.value)}
                        />
                    </th>
                    <th></th>
                </tr>
                <tr>
                    <th>#Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((item) => {
                    return (
                        <tr key={item.email}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    )
}

export default DataTable