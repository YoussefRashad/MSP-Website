import React, { useContext } from 'react'
import { ArticleContext } from '../context/Articles'
import { FaAngleDoubleUp } from 'react-icons/fa'

export const scrollAutoFromBackToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        })
    }, 200);
}

const ScrollButton = () => {
    const { height } = useContext(ArticleContext)

    const scrollBackToTop = ()=>{
        window.scrollTo({
            left:0,
            top:0,
            behavior:'smooth'
        })
    }
    return (
        <button
            className={height > 80 ? 'scroll-btn show-scroll-btn' : 'scroll-btn'}
            onClick={scrollBackToTop}
        >
            <FaAngleDoubleUp />
        </button>
    )
}

export default ScrollButton
