import React from 'react'
import { MdClose } from 'react-icons/md'

export default function Alert({ type, title, desc, show, hideAlert }) {
    console.log({ type, title, desc, show });

    return (
        <div className={`alert alert-card alert-${type} 
            text-center w-40 m-auto`}>
            <div>
                <button className="close" onClick={() => hideAlert()}>
                    <MdClose />
                </button>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            
        </div>
    );
}
