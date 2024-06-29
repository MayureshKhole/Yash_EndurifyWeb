import React from 'react';
import styled from 'styled-components';
import { products } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    width: 100%;
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;

const Product = styled.div`
    width: calc(33.33% - 30px);
    max-width: 350px;
    background: ${({ theme }) => theme.card};
    border: 0.1px solid #854ce6;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 5px;
    overflow: hidden;
    padding: 0;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: calc(50% - 30px);
    }
    @media (max-width: 500px) {
        width: calc(100% - 30px);
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    @media (max-width: 768px) {
        height: 180px;
    }
    @media (max-width: 500px) {
        height: 150px;
    }
`;

const ProductContent = styled.div`
    padding: 18px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProductTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin: 12px 0;
    text-align: center;
`;

const ProductDescription = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary + 80};
    text-align: center;
`;

const Products = () => {
    return (
        <Container id="products">
            <Wrapper>
                <Title>Our Products</Title>
                <Desc>
                    Explore the range of IT services and products we offer to cater to your business needs.
                </Desc>
                <ProductsContainer>
                    {products.map((product) => (
                        <Product key={product.title}>
                            <ProductImage src={product.image} alt={product.title} />
                            <ProductContent>
                                <ProductTitle>{product.title}</ProductTitle>
                                <ProductDescription>{product.description}</ProductDescription>
                            </ProductContent>
                        </Product>
                    ))}
                </ProductsContainer>
            </Wrapper>
        </Container>
    );
};

export default Products;
