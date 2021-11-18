import React from "react";

export const useFetch = url => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const getProducts = await response.json();
    setProducts(getProducts);
    setLoading(false);
  };

  React.useEffect(() => {
    getProducts();
  }, [url]);
  return { loading, products };
};
