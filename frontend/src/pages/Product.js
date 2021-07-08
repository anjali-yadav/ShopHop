import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

function Product({product}) {
    return (
        <>
            <Card className="my-3 p-3 rounded mx-auto shadow bg-light" style={{ width: '14.5rem', height: '21rem', overflow: 'hidden' }}>
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant="top" className="my-1"></Card.Img>
                </Link>
                <Card.Body className="my-1" >
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>
    
                    <Card.Text as="div" style={{overflow: 'hidden' }}>
                        <Rating rating={product.rating} total={product.numReviews} />
                    </Card.Text>

                    <Card.Text as="div" className="my-2" style={{overflow: 'hidden' }}>
                        <div>
                            Price: ${product.price}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product
