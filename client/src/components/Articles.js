import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:8080/articles')
       .then(res => setArticles(res.data))
       .catch(err => console.log(err)) 
    },[])

    return (
        <MainContainer>
            <ul>
                {
                    articles.map(article => (
                    <li className="container mt-5">
                        <h2>{article.title}</h2>
                        <p>{article.article}</p>
                        <span className="badge badge-secondary p-2">{article.authorname}</span>
                        <div className="row mt-5">
                            <div className="col-sm-2">
                                <a href="" className="btn btn-outline-success">Edit Article</a>
                            </div>
                            <div className="col-sm-2">
                                <a href="" className="btn btn-outline-danger">Delete Article</a>
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
`