import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../actions/cartAction';
import {
    Row,
    Col,
    Form,
    Button,
    Card,
    Image,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';
import Message from '../components/Message';
import {Link} from 'react-router-dom';

function CartPage({match, location, history}) {
    const productId = match.params.id;
    const qnt=location.search ? Number(location.search.split('=')[1]):1;
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0, 0)
        if(productId)
        {
          dispatch(addToCart(productId, qnt));
        }
    },[dispatch,productId,qnt])
    const cart = useSelector(state=>state.cart)
    const {cartItems} = cart;
    function removeFromCartHandler(id) {
        dispatch(removeFromCart(id));
    }
    function checkout () {
        history.push('/login?redirect=shipping')
    }
    return (
        <>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Message>
              Your Cart is Empty !<Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item, idx) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`} style={{textDecoration: 'none'}}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2} mx="auto">
                      <Form.Control
                        as="select"
                        value={item.qnt}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                    <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i
                          className="fa fa-trash"
                          aria-hidden="true"
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qnt, 0)}
                  ) Items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qnt * item.price, 0)
                  .toFixed(2)}
              </ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkout}
                className="bg-dark"
              >
                Checkout
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
    )
}

export default CartPage
