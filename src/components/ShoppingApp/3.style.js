import styled from "styled-components";

export const HeadTag = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 300px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
`;

export const ProductImg = styled.img`
  height: 160px;
  width: 130px;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const ProductTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-weight: bold;
  margin-top: 10px;
`;
