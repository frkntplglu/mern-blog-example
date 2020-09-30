import React from 'react';
import styled from 'styled-components';

const  Header  = () => {
    return (
        <MainContainer>
           <h1>Welcome to MERN Stack Blog</h1> 
        </MainContainer>
    )
}

export default  Header


// MAIN CONTAINER
const MainContainer = styled.header`
    background: url(../../img/header-bg.jpg) no-repeat center/cover;
    height:25rem;

    h1{
        transform:translate(-50%, -50%);
        color:#fff;
        font-weight:700;
        position:absolute;
        top:25%;
        left:50%;
        text-align:center;
    }
`;