import React from 'react'
import { ArticleContext } from '../../../context/Articles'
import { DELETE } from '../../../Node/Dashboard'
import { ARTICLE } from '../../../utils/EndPoints'

const DeleteFormInput = () => {
    const { articles } = React.useContext(ArticleContext)
    const [articleIDSearch, setArticleIDSearch] = React.useState('')
    const getAllArticlesName = () => {
        return articles.map((article, index) => <option value={article.id} key={index}>{article.title}</option>)
    }

    const handleClick = () => {

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

            {/* Delete Item */}
            <div className="row mt-3">
                {
                    articleIDSearch &&
                    <div className="col-md-6 col-12 form-group m-auto text-center">
                        <button 
                            onClick={handleClick} 
                            className="btn btn-danger btn-lg"
                        >
                            Delete
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}

export default DeleteFormInput
