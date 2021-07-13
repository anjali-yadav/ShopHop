import React, {useEffect} from 'react'
import { Row,Col } from 'react-bootstrap';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';

function HomePage({match}) {
    const keyword = match.params.keyword;
    console.log(keyword);
    const dispatch = useDispatch();
    const productList = useSelector((state)=>state.productList);
    const {loading, error, products} = productList;
    
    useEffect(()=>{
        window.scrollTo(0, 0);
        dispatch(listProducts());
    },[dispatch])

    return (
        <>
            {!keyword && <ProductCarousel/>}
            {loading? <Loader></Loader> : error? <Message variant="danger">{error}</Message> : (
                <>
                <Row xs={1} sm={2} md={3} lg={4} mt={3}>
                {
                    products.map((product,idx) => {
                        return (<Col key={product._id}>
                            <Product product={product}></Product>
                        </Col>)
                    })
                }
                </Row>
                </>
            )}
        </>
    )
}

export default HomePage;
