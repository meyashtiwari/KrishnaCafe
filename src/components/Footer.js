import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Krishna Cafe</h1>
          <p>A Place where good ideas and bad decisions take place</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Useful Links</FooterLinkTitle>
          <FooterLink to="/contact">Our Services</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  background: #0d0909;
`
const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 2rem;
    color: #ffc500;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #ffc500;
    transition: 0.3s ease-out;
  }
`
