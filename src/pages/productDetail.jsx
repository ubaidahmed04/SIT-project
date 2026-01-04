import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SingleProduct from '../components/singleProduct'
const ProductDetail = () => {
  const {id} = useParams()
  console.log("params",id)
  const [product, setProductDetail] = useState()
  const singleProduct = () =>{
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => setProductDetail(data))
  .catch(error => console.log(error))
  }
  useEffect(()=>{
    singleProduct()
  }, [])
  console.log(product)
  return (
    <SingleProduct productData={product}/>
  )
}

export default ProductDetail