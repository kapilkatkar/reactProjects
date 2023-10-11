import { useEffect, useState } from "react";
import "./2.style.css";
import {
  ProductContainer,
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductPrice,
  HeadTag,
} from "./3.style";
import HeaderCompo from "./4.HeaderForApp";
const ProductListCompo = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onInputSearch = (searchValue) => {
    setTimeout(() => {
      const filterProducts = products.filter((elem) => {
        return elem.title.toLowerCase().includes(searchValue);
      });

      setProducts(filterProducts);
    }, 300);
  };

  return (
    <div>
      <HeadTag>My Products</HeadTag>

      <HeaderCompo onSearch={onInputSearch}></HeaderCompo>
      <ProductContainer>
        {products.map((item) => {
          return (
            <ProductCard key={item.id}>
              <ProductImg src={item.image} alt="" />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>&#8377; {item.price} </ProductPrice>
            </ProductCard>
          );
        })}
      </ProductContainer>
    </div>
  );
};
export default ProductListCompo;
