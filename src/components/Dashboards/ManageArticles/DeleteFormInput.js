import React from 'react'
import { ArticleContext } from '../../../context/Articles'
import { UserContext } from '../../../context/User'
import { DELETE } from '../../../Node/Dashboard'
import { ARTICLE } from '../../../utils/EndPoints'
import LoadingComponent from '../../LoadingComponent'

const DeleteFormInput = () => {
    const { articles } = React.useContext(ArticleContext)
    const [articleIDSearch, setArticleIDSearch] = React.useState('')

    const { showAlert } = React.useContext(UserContext)
    const [loading, setLoading] = React.useState(false)

    const handleClick = async (e) => {
        e.preventDefault()
        setLoading(false)
        try {
            await DELETE({ id: articleIDSearch, path: ARTICLE })
            setTimeout(() => {
                setArticleIDSearch('')
                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'delete your item successfully' })
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                setArticleIDSearch('')
                setLoading(false);
                showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' })
            }, 1000);
        }
    }

    if(loading){
        return <LoadingComponent />
    }

    const getAllArticlesName = () => {
        return articles.map((article, index) => <option value={article.id} key={index}>{article.title}</option>)
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
                            Delete Article
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}

export default DeleteFormInput
