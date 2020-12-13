import React from 'react'

const Breadcrumb = ({title}) => {
    return (
        <main>
            <div className="breadcrumb">
                <h1 style={{ fontSize: 'xx-large' }}>{title}</h1>
            </div>

            <div className="separator-breadcrumb border-top" />
        </main>
    )
}
export default Breadcrumb;
