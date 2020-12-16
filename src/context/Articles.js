import React, { useState, useEffect } from 'react'
import axios from 'axios'

import URL from '../utils/URL'

import Img1 from '../assets/images/products/speaker-1.jpg'
// import Img2 from '../assets/images/products/headphone-1.jpg'
// import Img3 from '../assets/images/products/headphone-2.jpg'
// import Img4 from '../assets/images/products/headphone-3.jpg'
// import Img5 from '../assets/images/products/headphone-4.jpg'
// import Img6 from '../assets/images/products/iphone-1.jpg'
// import Img7 from '../assets/images/products/speaker-2.jpg'
// import Img8 from '../assets/images/products/watch-1.jpg'

export const ArticleContext = React.createContext()

export default function ArticleProvider({ children }) {

    const [articles, setArticles] = useState([])
    const [featureArticles, setFeatureArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [height, setHeight] = useState(0)
    let i = 0;

    useEffect(() => {
        setLoading(true)
        const getArticles = async ()=>{
            try{
                const response = await axios(`${URL}/articles`)
                const { data:articles } = response;
                if(articles){
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
                        const defaultImg = Img1;

                        const returnedObj = {
                            title, idArticle: _id, author, description, created, img: defaultImg,
                            feature
                        }

                        if (feature) {
                            setFeatureArticles([...featureArticles, returnedObj])
                        }
                        
                        return returnedObj;
                    })
                    setArticles([...newArticles])
                    
                }else{
                    setArticles([])
                }
            }catch(error){
                console.log("not connected >> ", error);
            }
            setLoading(false)
        }
        getArticles()
        return () => {}
    },[]);
    

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            setHeight(window.pageYOffset);
        })
        return ()=>{ window.removeEventListener("scroll", ()=>{})}
    })

    const getArticle = (id)=> articles.find(item => item.idArticle === id);

    return (
        <ArticleContext.Provider value={{
            articles,
            featureArticles,
            loading,
            getArticle,
            height
        }}>
            {children}
        </ArticleContext.Provider>
    )
}