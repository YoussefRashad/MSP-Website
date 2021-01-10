import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { BE_URL } from '../utils/URL'
import imageLocal from '../utils/dataImages'

export const ArticleContext = React.createContext()

export default function ArticleProvider({ children }) {

    const [articles, setArticles] = useState([])
    const [featureArticles, setFeatureArticles] = useState([])
    const [loading, setLoading] = useState(false)

    // Get All Articles in first loading
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
                            feature,
                            comments
                        } = article;
                        
                        const created = new Date(createdAt).toUTCString()
                        const overallRate = comments.reduce((acc, curr)=>{
                            if(curr.rate){
                                return acc += (+curr.rate)
                            }else{
                                return acc += 0;
                            }
                        },0)
                        const returendOverallRated = !comments.length ? 0 : overallRate/comments.length;

                        const returnedObj = {
                            title, id: _id, author, description, created,
                            img: imageLocal[counterImages++], feature, 
                            comments, overallRate: Math.round(returendOverallRated)
                        }

                        returnedObj.feature && arr.push(returnedObj)

                        return returnedObj
                    })
                    setArticles(newArticles)
                    setFeatureArticles(arr)
                }else{
                    setArticles([])
                }
            }catch(error){
                console.log("not connected >> ", error.message);
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

    const getArticleByID = (ID) => articles.find(article => article.id === ID)

    const sumbitComment = async ({ name, image, title, comment, rate, date, id }) => {
        console.log({ name, image, title, comment, rate, date, id });
        const response = await axios.patch(`${BE_URL}/articles/comment-form/${id}`, {
            'comments': {
                name, image, title, comment, rate, date
            }
        })
        return response;
    }

    return (
        <ArticleContext.Provider value={{
            articles,
            featureArticles,
            loading,
            getArticlesByTerm,
            getArticleByID,
            sumbitComment
        }}>
            {children}
        </ArticleContext.Provider>
    )
}