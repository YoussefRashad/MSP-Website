import React, { useState, useEffect } from 'react'

import { UserContext } from '../../../context/User'
import { ArticleContext } from '../../../context/Articles'
import { UPDATE } from '../../../Node/Dashboard'
import { ARTICLE } from '../../../utils/EndPoints'
import LoadingComponent from '../../LoadingComponent'

const UpdateFormInput = () => {

    const { showAlert, alert } = React.useContext(UserContext)
    const { articles } = React.useContext(ArticleContext)

    const [articleIDSearch, setArticleIDSearch] = useState('')
    const [article, setArticle] = useState(undefined)

    const [loading, setLoading] = useState(false);

    const isEmpty = !article || !article.title || !article.author || !article.img || !article.description || !article.feature || alert.show

    // get selected article
    useEffect(()=>{
        setLoading(true)
        setArticle(articles.find(article => article.id === articleIDSearch))
        setLoading(false)
    }, [articleIDSearch])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)

        try{
            const data = {
                title: article.title,
                description: article.description,
                author: article.author,
                image: article.img,
                feature: new Boolean(article.feature)
            }
            await UPDATE({ data, path: ARTICLE, id: article.id })
            setTimeout(() => {
                setArticle(undefined)
                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'update your data successfully' })
            }, 1000);
        }catch(error){
            setTimeout(() => {
                setArticle(undefined)
                setLoading(false);
                showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' })
            }, 1000);
        }
    }

    const getAllArticlesName = ()=>{
        return articles.map((article, index) => <option value={article.id} key={index}>{article.title}</option>)
    } 

    if (loading) {
        return <LoadingComponent />
    }

    
    return (
        <div>

            <div className="row">
                {/* <!-- Feature --> */}
                <div className="col-md-6 col-12 form-group mb-3 m-auto text-center">
                    <label htmlFor="feature">Search by name</label>
                    <select
                        className="custom-select mr-sm-2"
                        id="feature"
                        value={articleIDSearch}
                        onChange={(e) => setArticleIDSearch(e.target.value)}
                    >
                        <option hidden>Choose...</option>
                        {getAllArticlesName()}
                    </select>
                </div>
            </div>

            {/* Fetched form data */}
            {
                article &&
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                id="title"
                                value={article.title}
                                onChange={(e) => setArticle({ ...article, title: e.target.value })}
                                autoFocus
                            />
                        </div>

                        {/* <!-- Author --> */}
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                id="author"
                                className="form-control"
                                required
                                value={article.author}
                                onChange={(e) => setArticle({ ...article, author: e.target.value })}
                            />
                        </div>

                        {/* <!-- Image --> */}
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                id="image"
                                className="form-control"
                                required
                                value={article.img}
                                onChange={(e) => setArticle({ ...article, img: e.target.value })}
                            />
                            <small id="passwordHelpInline" className="text-muted">
                                Must be from Google Drive.
                    </small>
                        </div>

                        {/* <!-- Feature --> */}
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="feature">Feature</label>
                            <select
                                className="custom-select mr-sm-2"
                                id="feature"
                                value={article.feature}
                                onChange={(e) => setArticle({...article, feature: e.target.value})}
                            >
                                <option hidden>Choose...</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div className="col-12 form-group mb-3">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="textarea"
                                id="description"
                                className="form-control"
                                cols="30"
                                rows="5"
                                required
                                value={article.description}
                                onChange={(e) => setArticle({ ...article, description: e.target.value })}
                            />
                        </div>

                    </div>

                    {/* empty form text */}
                    {
                        isEmpty &&
                        <div className="row">
                            <div className="col-md form-group mb-3">
                                <p className="form-empty">Please fill out all form fields</p>
                            </div>
                        </div>
                    }


                    {/* <!-- BUTTON --> */}
                    {
                        !isEmpty &&
                        <div className="col-md-12">
                            <div className="form-group row text-center" id="">
                                <div className="col-md-12 col-sm-10">
                                    <button type="submit" className="btn btn-lg btn-primary">
                                        Update Article
                            </button>
                                </div>
                            </div>
                        </div>
                    }

                </form>
            }

        </div>
    )
}

export default UpdateFormInput
