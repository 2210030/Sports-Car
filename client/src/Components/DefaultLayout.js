import React from 'react'

function DefaultLayout(props) {
    return(
        <div>
            <div className="header bs1">
                <div className="flex-justify-content-between">
                    <h1>Sports Car</h1>
                   

                </div>

            </div>
            <div className="content">
                {props.children}

            </div>
        </div>
    )
}

export default DefaultLayout