import React from 'react'

const CustomRepos = ({ html_url, name, description, created_at, parent }) => {
    console.log({ html_url, name, description, created_at, parent });
    return (
        <div className="repoCard">
            <h2>
                <a rel="noopener noreferrer" href={html_url} target="_blank">
                    {name}{' '}
                </a>
            </h2>
            <p className="repoCardPara">
                forked from{' '}
                {
                    parent &&
                    <a rel="noopener noreferrer" href={parent.html_url} target="_blank">
                        {parent.full_name}
                    </a>
                }
            </p>
            <p className="repoCardPara">{description}</p>
            <br />
            <p className="repoCardPara text-right">{created_at} | date</p>
            <hr />
        </div>
    )
}

export default CustomRepos
