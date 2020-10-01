import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import spinner from '../loader.gif'
import {Link} from 'react-router-dom'

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
       getArticles();
        
    },[setArticles])


    const getArticles = () => {
        axios.get('/articles')
       .then(res => setArticles(res.data))
       .catch(err => console.log(err))
    }
    

    const handleDelete = (e,id) => {
        e.preventDefault();
        axios.delete(`/articles/delete/${id}`)
       .then(res => console.log(res.data))
       .catch(err => console.log(err)) 

       getArticles()
    }

    return (
        <MainContainer>
            <ul>
                {
                    !articles.length ? <img src={spinner} alt="" className="spinner-gif" /> : 
                    articles.map(article => (
                        <li key={article.title} className="container mt-5">
                            <h2><Link to={`/article/${article._id}`}>{article.title}</Link></h2>
                            <span><b>ID : </b> {article._id}</span>
                            <p>{article.article}</p>
                            <span className="badge badge-secondary p-2">{article.authorname}</span>
                            <div className="row mt-5">
                                <div className="col-sm-2">
                                    <a href="" className="btn btn-outline-success">Edit Article</a>
                                </div>
                                <div className="col-sm-2">
                                    <a href="" onClick={(e) => handleDelete(e,article._id)} className="btn btn-outline-danger">Delete Article</a>
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
    h2{
        a{
            color: var(--dark-green)
        }
    }
`