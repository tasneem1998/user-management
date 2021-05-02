import React,{useState, useEffect} from 'react'
import axios from "axios"
import { API_URL } from '../config/serverKey'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { USER_DETAIL } from '../config'

export const ShowUser = () => {    
    let {id} = useParams()

    const [user, setUser] = useState(USER_DETAIL)

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () =>{
        const result = await axios.get(`${API_URL}${id}`)
        setUser(result.data)
    }

    return (
        <div className="w-50 mx-auto">
            <Link to="/"><FontAwesomeIcon icon={faBackward} /><span className="text-secondary ml-3">Back to Home</span></Link>
            <ul className="list-group">
                <li className="list-group-item active">User ID : {id}</li>
                <li className="list-group-item"><span>Name:</span> {user.name}</li>
                <li className="list-group-item"><span>Email:</span> {user.email}</li>
                <li className="list-group-item"><span>Phone:</span> {user.phone||"-"}</li>
                <li className="list-group-item"><span>Address:</span> {user.address||"-"}</li>
            </ul>
        </div>
    )
}
