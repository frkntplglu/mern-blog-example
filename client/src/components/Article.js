import React,{useState, useEffect} from 'react'
import axios from 'axios'
import spinner from '../loader.gif'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const Article = (props) => {
    const [article,setArticle] = useState({})
    useEffect(() => {
        console.log(props)
        axios.get(`/articles/${props.match.params.id}`)
        .then(res => setArticle(res.data))
        .catch(err => console.log(err))
    },[])
    return (
        <ArticleContainer>
            
               {
                   
                   !article.title ? <img src={spinner} className="spinner-gif" alt="" />
                   :
                   <div className="container">
                        <Link to="/"> Back</Link>
                        <h2>{article.title}</h2>
                        <p>{article.article}</p>
                        <span className="badge badge-secondary p-2">{article.authorname}</span>
                    </div>
               }
                            
        </ArticleContainer>
    )
}

export default Article


const ArticleContainer = styled.div`
    padding:4rem 0;

    .spinner-gif{
        margin:0 auto;
        display:block;
        width:75px;
    }
`