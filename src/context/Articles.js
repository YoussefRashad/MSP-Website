import React, { useState, useEffect } from 'react'
import { getArticlesFromBE } from '../Node/Articles'
import DEFAULT_IMAGE from '../assets/images/products/speaker-1.jpg'
import flattenImages from '../utils/flattenIimages.js'
import { UserContext } from './User'

export const ArticleContext = React.createContext()
export default function ArticleProvider({ children }) {
    const { setHigherLoading } = React.useContext(UserContext)
    const [articles, setArticles] = useState([])
    const [featureArticles, setFeatureArticles] = useState([])
    const [loading, setLoading] = useState(false)

    // Get All Articles in first loading
    useEffect(() => {
        setLoading(true)
        setHigherLoading(true)
        const getArticles = async ()=>{
            try{
                const response = await getArticlesFromBE()
                const { data:articles } = response;
                if (articles) {
                    flattenImages(articles)
                    let arr = []
                    const newArticles = articles.map(article =>{
                        const {
                            author,
                            description,
                            title,
                            _id,
                            createdAt,
                            feature,
                            comments,
                            image
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
                            img: image || DEFAULT_IMAGE, feature, 
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
            setHigherLoading(false)
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
    
    const getArticleByID = (ID) =>{
        setLoading(true)
        const article = articles.find(article => article.id === ID)
        setLoading(false)
        return article
    }

    const addArticleCommentInTheFly = (id, comment)=>{
        setArticles(()=>{
            return articles.map(article =>{
                if(article.id === id){
                    return { ...article, comments: article.comments.push(comment) }
                }
                return article
            })
        })
    }

    return (
        <ArticleContext.Provider value={{
            articles,
            featureArticles,
            loading,
            getArticlesByTerm,
            getArticleByID,
            addArticleCommentInTheFly
        }}>
            {children}
        </ArticleContext.Provider>
    )
}