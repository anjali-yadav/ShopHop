import React,{useState, useEffect} from 'react'
import { Row, Col, Image, ListGroupItem, ListGroup, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from '../components/Rating'

function ProductDetails({history,match}) {
    const [qnt, setQnt] = useState(1);
    const dispatch = useDispatch();
    const productDetails = useSelector(state=>state.productDetails)
    const {loading, error, product} = productDetails;
    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))
    },[dispatch,match])

    function handleAddClick() {
        history.push(`/cart/${match.params.id}?qnt=${qnt}`)
    }
        
    return (
        <>
            {loading? <Loader></Loader> : error? <Message variant="danger">{error}</Message> : (
                <div>
                <Link to='/' className='btn btn-light my-1'><i className="fas fa-arrow-left"></i>
                &nbsp;Back</Link>
                    <h1>Product Details Page</h1>
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid></Image>
                        </Col>
                        <Col md={3}>
                            <ListGroup>
                                <ListGroupItem>
                                    <h3>{product.name}</h3>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Rating rating={product.rating} total={product.numReviews}></Rating>
                                    <div>Total Reviews: {product.numReviews}</div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Price :${product.price}
                                </ListGroupItem>
                                <ListGroupItem>
                                    {product.description}
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>
                                        {product.countInStock>0? "In Stock" : "Out of stock"}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            {
                                product.countInStock>0 && (
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Quantity</Col>
                                            <Form.Control as= "select" value={qnt} onChange={(e)=>setQnt(e.target.value)}>
                                                {
                                                    [...Array(product.countInStock).keys()].map((x)=>(
                                                        <option key={x+1} value={x+1}>
                                                        {x+1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Row>
                                    </ListGroupItem>
                                )
                            }
                            <ListGroupItem >
                                <Button className="btn-block" type="button" onClick={handleAddClick}>Add to Cart</Button>
                            </ListGroupItem>
                        </Col>
                    </Row>
                </div>
            )}
        </>
    )
}

export default ProductDetails
