import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ProductDetail = () => {
  const {id} = useParams()
  console.log("params",id)
  const [product, setProductDetail] = useState()
  const singleProduct = () =>{
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => setProductDetail(data));
  }
  useEffect(()=>{
    singleProduct()
  }, [])
  console.log(product)
  return (
    <div>ProductDetail
      <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product?.image} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
         {product?.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default ProductDetail