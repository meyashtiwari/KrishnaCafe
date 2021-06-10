import React from 'react'
import styled from 'styled-components'

const Product = ({img, name, price, button}) => {

    return (
        <ProductCard>
            <ProductImg src={img} />
            <ProductInfo>
                <ProductTitle>{name}</ProductTitle>
                <ProductPrice>{price}</ProductPrice>
                <ProductButton>{button}</ProductButton>
            </ProductInfo>
        </ProductCard>
    )
}

export default Product


const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`

const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`

const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`

const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`

const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`