import React,{useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const EditArticle = (props) => {
    const [title, setTitle] = useState("");
    const [authorname, setAuthorName] = useState("");
    const [article, setArticle] = useState("");
    const [message, setMessage] = useState("");
    useEffect(() => {
        axios.get(`/articles/${props.match.params.id}`)
        .then(res => {
            console.log(res.data)
            setTitle(res.data.title)
            setAuthorName(res.data.authorname)
            setArticle(res.data.article)
        })
        .catch(err => console.log(err))
    },[])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newArticle = {
            "title" : title,
            "article" : article,
            "authorname": authorname
        }

        console.log(newArticle)
        
        axios.put(`/articles/update/${props.match.params.id}`, newArticle)
        .then(res => setMessage(res.data))
        .catch(err => console.log(err))

        setTitle("")
        setAuthorName("")
        setArticle("")
    }
    return (
        <EditArticleContainer>
        {
            <form className="container" encType="multipart/form-data" onSubmit={handleOnSubmit}>
            <h1>Edit Article</h1>
            {message === "" ? "" : <div className="alert alert-success">{message}</div>}
            <div className="form-group">
                <label htmlFor="authorname">Author Name</label>
                <input type="text" value={authorname} className="form-control" placeholder="Author Name" onChange={e => setAuthorName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" value={title} className="form-control" placeholder="Title"  onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Content</label>
                <textarea value={article} className="form-control" placeholder="Content" rows="3"  onChange={e => setArticle(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Edit Article</button>
        </form>
        }
        </EditArticleContainer>
    )
}

export default EditArticle


const EditArticleContainer = styled.div`
    margin: 3rem auto ;

    width:31.25rem;

    h1{
        color: var(--dark-green)
    }
`