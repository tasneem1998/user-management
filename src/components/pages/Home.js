import React, { useState, useEffect } from 'react'
import axios from "axios"
import { API_URL } from '../config/serverKey'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'


export const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    loadUsers()
  }, [])
  const loadUsers = async () => {
    const result = await axios.get(API_URL)
    setUsers(result.data.reverse())
  }

  const deleteUser = async (id) => {
    alert("User will be deleted permanently !!!");
    await axios.delete(`${API_URL}${id}`);
    loadUsers();
  }
  return (
    <div>
      <h1>Home Page</h1>
      {
        users.length > 0 ?
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col" colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td><Link to={`users/view/${user.id}`}><FontAwesomeIcon icon={faEye} /></Link></td>
                  <td><Link to={`users/edit/${user.id}`}><FontAwesomeIcon icon={faEdit} className="text-warning" /></Link></td>
                  <td><FontAwesomeIcon icon={faTrash} style={{ color: "red", cursor: "pointer" }} onClick={() => { deleteUser(user.id) }} /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        :
        <p className="text-danger">No User Found !</p>
    }
    </div>
  )
}
