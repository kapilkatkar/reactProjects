import { useEffect, useState } from "react";

const Products = () => {
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

  return (
    <div>
      <h1>My Products</h1>
      <div style={{ display: "flex", gap: 50, flexWrap: "wrap" }}>
        {products.map((item) => {
          return (
            <div key={item.id} style={{ width: 140 }}>
              <img src={item.image} alt="" height={70} width={70} />
              <p key={item.id} style={{ fontSize: 15 }}>
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
