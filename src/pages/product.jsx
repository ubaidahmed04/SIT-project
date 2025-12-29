import React, { useEffect, useState } from 'react'
 import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';
const Product = () => {
  const [productData , setProductData] = useState([])
  const getAllProducts = () =>{
      fetch('https://fakestoreapi.com/products')
       .then(response => response.json())
       .then(data => console.log(setProductData(data)))
       .catch((err)=> console.log(err))
  }
  console.log(productData)
  useEffect(()=>{
    console.log("Product Component")
  })
  useEffect(()=>{
    console.log("First Time Load Product Component ");
    getAllProducts()
  }, [])
  return (
    <div>Product

      {
        productData.map((item, i )=>(
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.description}
        </Card.Text>
        <Link to={`/product/${item.id}`}>
        <Button variant="primary">See More</Button>
        </Link>
      </Card.Body>
    </Card>
        ))
      }
    </div>
  )
}

export default Product