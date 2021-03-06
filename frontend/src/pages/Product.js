import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Rating from '../components/Rating'

function Product({product}) {
    return (
        <>
            <Card className="my-3 pb-1 rounded bg-light border-0" style={{ width: '14rem', height: '16rem', overflow: 'hidden', fontSize:13 }}>
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant="top" className="mb-1" style={{width:"14.5rem", height:"10rem"}}></Card.Img>
                </Link>
                <Card.Body className="my-1" >
                    <Link to={`/product/${product._id}`} style={{textDecoration: 'none', fontWeight: 'bold'}}>
                        <Card.Title as="div" style={{color:"black"}}>
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>
    
                    {/* <Card.Text as="div" style={{overflow: 'hidden' }}>
                        <Rating rating={product.rating} total={product.numReviews} />
                    </Card.Text> */}

                    <Card.Text as="div" className="my-2" style={{overflow: 'hidden' }}>
                        <div>
                            ${product.price}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product
