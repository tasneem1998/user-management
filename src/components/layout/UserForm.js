import React from 'react'
import { InputField } from '../controls/InputField'
import { SubmitButton } from '../controls/SubmitButton'

export const UserForm = ({action, handleSubmit, data, setData}) => {
    const userIputs = [
        { name: "name", placeholder: "Name" },
        { name: "phone", placeholder: "Phone" },
        { name: "email", placeholder: "Email" },
        { name: "address", placeholder: "Address" }
    ]

    const handleChange = (e) => {
        const {name, value} = e.target
        setData({...data,[name]:value})
    }
    
    return (
        <div className="card p-3 w-75 mx-auto shadow">
            <h1>{action} User</h1>
            <form>
                {
                    userIputs.map((input, i) => (
                        <div key={i}>
                            <InputField
                                name={input.name}
                                placeholder={input.placeholder}
                                value={data[input.name]}
                                onChange={handleChange}
                            />
                        </div>
                    ))
                }
                <SubmitButton btnText={action} onClick={handleSubmit}/>
            </form>
        </div>
    )
}
