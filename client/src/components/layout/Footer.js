import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <FooterContainer>
            <span>&copy; {new Date().getFullYear()} All rights reserved. FT </span>
        </FooterContainer>
    )
}

export default Footer


// Footer container
const FooterContainer = styled.footer`
    background:#344;
    height: 4rem;
    text-align:center;
    span{
        color:#fff;
        line-height:4rem;
    }
`