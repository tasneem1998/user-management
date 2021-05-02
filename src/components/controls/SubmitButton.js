import React from 'react'

export const SubmitButton = ({btnText, onClick}) => {
    return (
        <div>
            <button className="btn btn-primary" onClick={onClick}>{btnText}</button>
        </div>
    )
}
