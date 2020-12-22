import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { BE_URL } from '../utils/URL'

import imageLocal from '../utils/dataImages'

export const ArticleContext = React.createContext()

export default function ArticleProvider({ children }) {

    const [articles, setArticles] = useState([])
    const [featureArticles, setFeatureArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setLoading(true)
        const getArticles = async ()=>{
            try{
                const response = await axios(`${BE_URL}/articles`)
                const { data:articles } = response;
                if (articles) {
                    let arr = []
                    let counterImages = 0;
                    const newArticles = articles.map(article =>{
                        const {
                            author,
                            description,
                            title,
                            _id,
                            createdAt,
                            feature
                        } = article;
                        
                        const created = new Date(createdAt).toUTCString()

                        const returnedObj = {
                            title, idArticle: _id, author, description, created,
                            img: imageLocal[counterImages++],
                            feature}

                        returnedObj.feature && arr.push(returnedObj)

                        return returnedObj
                    })
                    setArticles(newArticles)
                    setFeatureArticles(arr)
                }else{
                    setArticles([])
                }
            }catch(error){
                console.log("not connected >> ", error);
            }
            setLoading(false)
        }
        getArticles()
    },[]);
    
    const getArticlesByTerm = (searchTerm)=>{
        return articles.filter(article => (
            article.title.toLowerCase().includes(searchTerm.toLowerCase())
            || article.description.toLowerCase().includes(searchTerm.toLowerCase())
            || article.author.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }

    const getArticleByID = (ID)=> articles.find(article => article.idArticle === ID)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            setHeight(window.pageYOffset);
        })
        return ()=>{ window.removeEventListener("scroll", ()=>{})}
    })

    return (
        <ArticleContext.Provider value={{
            articles,
            featureArticles,
            loading,
            height,
            getArticlesByTerm,
            getArticleByID
        }}>
            {children}
        </ArticleContext.Provider>
    )
}