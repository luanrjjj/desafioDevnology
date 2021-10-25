import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCart {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    async function loadProducts1() {
      fetch(
        'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider'
      )
        .then((response) => response.json())
        .then((data) => setProducts1(data));
    }
    loadProducts1();
  }, []);

  useEffect(() => {
    async function loadProducts2() {
      fetch(
        'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider'
      )
        .then((response) => response.json())
        .then((data) => setProducts2(data));
    }
    loadProducts2();
  }, []);

  console.log('1', products1);
  console.log('2', products2);

  return <h1>OI</h1>;
};

export default Home;
