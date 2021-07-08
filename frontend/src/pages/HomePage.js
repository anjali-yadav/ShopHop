import React, {useEffect} from 'react'
import { Row,Col } from 'react-bootstrap';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
// import Loader from '../components/Loader';

function HomePage() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=>state.productList);
    const {loading, error, products} = productList;
    
    useEffect(()=>{
        dispatch(listProducts());
    },[dispatch])

    return (
        <>
            {loading? <Loader></Loader> : error? <Message variant="danger">{error}</Message> : (
                <Row md={3}>
                {
                    products.map((product,idx) => {
                        return (<Col key={product._id}>
                            <Product product={product}></Product>
                        </Col>)
                    })
                }
                </Row>
            )}
        </>
    )
}

export default HomePage;
