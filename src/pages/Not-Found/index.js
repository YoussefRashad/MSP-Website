import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div class="not-found-wrap text-center">
            <h1 class="text-60">
                404
            </h1>
            <p class="text-36 subheading mb-3">Error!</p>
            <p class="mb-5 text-muted text-18">Sorry! The page you were looking for doesn't exist.</p>
            <Link class="btn btn-lg btn-primary btn-rounded" to="/">Go back to home</Link>
        </div>
    )
}

export default NotFound
