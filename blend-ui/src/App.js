import React ,{useState}from 'react';
import Navbar from './Navbar';
import images from './assets/image'
import CustomSlider from "./Slidercomponent";
import Card from './Components/Card' 
import './App.css'

import AboutUs from './Components/AboutUs';
const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://www.wizvalue.com/cdn/shop/files/1_07f3ac38-152e-42d0-82d5-6e1bdfa0c597.jpg?v=1688445456',
    price: 100,
  },
  {
    id: 1,
    name: 'Product 1',
    image: 'https://cdn.shopify.com/s/files/1/0516/1795/6030/files/Room-Freshener.jpg?v=1698245278',
    price: 100,
  },
  {
    id: 1,
    name: 'Product 1',
    image: 'https://cdn.shopify.com/s/files/1/0516/1795/6030/files/Hand-Sanitizer.jpg?v=1698245278',
    price: 100,
  },
  
  {
    id: 1,
    name: 'Product 1',
    image: 'https://www.wizvalue.com/cdn/shop/files/Dishwashlemon.jpg?v=1706331221',
    price: 100,
  },
  {
    id: 1,
    name: 'Product 1',
    image: 'https://www.wizvalue.com/cdn/shop/files/Creme.jpg?v=1704775604',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://www.purecult.in/cdn/shop/files/FABRIC800ML.jpg?v=1709393232&width=360',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://www.wizvalue.com/cdn/shop/files/Blossom_d26cefd1-a929-4cb3-b90c-9ad19cb2b249.jpg?v=1704775806',
    price: 300,
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://www.purecult.in/cdn/shop/files/Laundrydetergent500mland750mlcombo.png?v=1710526769&width=360',
    price: 300,
  },
];


function App() {


  return (
    
    <div>
     
      <Navbar />
      <CustomSlider>{images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}</CustomSlider>
        <h1 className='bestseller'>Our Bestsellers</h1>     
         <div className='cards'>  {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}</div>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;