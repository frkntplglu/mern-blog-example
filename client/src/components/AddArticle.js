import React,{useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [authorname, setAuthorName] = useState("");
    const [article, setArticle] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newArticle = {
            "title" : title,
            "article" : article,
            "authorname": authorname
        }

        console.log(newArticle)

        axios.post("articles/add", newArticle)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        setTitle("")
        setAuthorName("")
        setArticle("")
    }
    return (
        <AddArticleContainer>
        <form className="container" encType="multipart/form-data" onSubmit={handleOnSubmit}>
            <h1>Add New Article</h1>
            <div className="form-group">
                <label htmlFor="authorname">Author Name</label>
                <input type="text" value={authorname} className="form-control" placeholder="Author Name" onChange={e => setAuthorName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" value={title} className="form-control" placeholder="Title"  onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea value={article} className="form-control" placeholder="Content" rows="3"  onChange={e => setArticle(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add Article</button>
        </form>
        </AddArticleContainer>
    )
}

export default AddArticle


const AddArticleContainer = styled.div`
    margin: 3rem auto ;

    width:31.25rem;

    h1{
        color: var(--dark-green)
    }
`