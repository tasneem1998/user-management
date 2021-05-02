import React from 'react'

export const Contact = () => {
    return (
        <div>
            <h2>Contact Page</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="Email1">Email address</label>
                    <input type="email" className="form-control" id="Email1" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="Password1">Password</label>
                    <input type="password" className="form-control" id="Password1" placeholder="Password"/>
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
