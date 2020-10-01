import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import spinner from '../loader.gif'

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
       axios.get('/articles')
       .then(res => setArticles(res.data))
       .catch(err => console.log(err)) 
    },[])

    const handleDelete = (e) => {
        e.preventDefault()
    }

    return (
        <MainContainer>
            <ul>
                {
                    !articles.length ? <img src={spinner} alt="" className="spinner-gif" /> : 
                    articles.map(article => (
                        <li key={article.title} className="container mt-5">
                            <h2>{article.title}</h2>
                            <span><b>ID : </b> {article._id}</span>
                            <p>{article.article}</p>
                            <span className="badge badge-secondary p-2">{article.authorname}</span>
                            <div className="row mt-5">
                                <div className="col-sm-2">
                                    <a href="" className="btn btn-outline-success">Edit Article</a>
                                </div>
                                <div className="col-sm-2">
                                    <a href="" onClick={(handleDelete(e,article._id))} className="btn btn-outline-danger">Delete Article</a>
                                </div>
                            </div>
                        </li>
                        ))
                }
            </ul>
        </MainContainer>
    )
}

export default Articles


const MainContainer = styled.div`
    margin: 7rem 0;

    .spinner-gif{
        margin:0 auto;
        display:block;
        width:75px;
    }
`