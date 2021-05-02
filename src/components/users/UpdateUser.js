import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router';
import { USER_DETAIL } from '../config';
import { API_URL } from '../config/serverKey';
import { UserForm } from '../layout/UserForm'

export const UpdateUser = () => {
    const history = useHistory()
    const [user, setUser] = useState(USER_DETAIL)

    let {id} = useParams()

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () =>{
        const result = await axios.get(`${API_URL}${id}`)
        setUser(result.data)
    }

    const updateUser = async (e) => {
        e.preventDefault();
        await axios.put(`${API_URL}${id}`, user)
        alert("User Updated Successfully !!!")
        history.push("/")
    }

    return (
        <div>
            <UserForm action="Edit" handleSubmit={updateUser} data={user} setData={setUser}/>
        </div>
    )
}
