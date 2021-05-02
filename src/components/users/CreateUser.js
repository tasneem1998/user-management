import React, { useState } from 'react'
import { API_URL } from '../config/serverKey'
import axios from "axios"
import { useHistory } from 'react-router'
import { UserForm } from '../layout/UserForm'
import { USER_DETAIL } from '../config'


export const CreateUser = () => {
    const history = useHistory()

    const [user, setUser] = useState(USER_DETAIL)

    const addUser = async e => {
        e.preventDefault();
        axios.post(API_URL,user)
        alert("User Added Successfully !!!")
        history.push("/")
    } 
    return (
        <div>
            <UserForm action="Add" handleSubmit={addUser} data={user} setData={setUser}/>
        </div>
    )
}
