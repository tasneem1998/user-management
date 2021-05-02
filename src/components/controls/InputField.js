import React from 'react'

export const InputField = ({ name, placeholder, value, onChange }) => {
    return (
        <div className="form-group">
            <input className="form-control" name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}
