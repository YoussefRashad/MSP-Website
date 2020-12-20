import React from 'react'

const Member = ({ html_url, avatar_url }) => {
    return (
        <a rel="noopener noreferrer" href={html_url} target="_blank" className="memberLink">
            <img src={avatar_url} alt="" className="memberLinkImg" />
        </a>
    )
}

export default Member
