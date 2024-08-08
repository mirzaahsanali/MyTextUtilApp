import React from 'react'

const Alert = (props) => {

    return (
        <>
            {props.alert && <div className="container">
                <div className={`alert alert-success alert-dismissible fade show`} role="alert">
                    <strong>Success:</strong> {props.alert}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <hr />
            </div>}
        </>
    )
}

export default Alert;