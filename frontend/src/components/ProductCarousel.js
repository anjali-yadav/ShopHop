import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image, Box } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <Carousel>
        {products.map((product) => (
          <Carousel.Item key={product._id} interval={1000}>
            <Link to={`/product/${product._id}`}>
              <Image src={product.image} alt={product.name} className="d-block w-100" height={400} mb={4}/>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default ProductCarousel