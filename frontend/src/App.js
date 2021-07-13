import {Container} from 'react-bootstrap'; 
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import CartPage from './pages/CartPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import LoginScreen from './pages/LoginPage';
import RegisterScreen from './pages/RegisterPage';
import ProfileScreen from './pages/ProfilePage';
import ShippingScreen from './pages/ShippingPage'
import PaymentScreen from './pages/PaymentPage'
import PlaceOrderScreen from './pages/PlaceOrderPage'
import OrderScreen from './pages/OrderPage'
import UserList from './pages/UserList'
import UserEditPage from './pages/UserEditPage'

function App() {
  
  return (
    <Router>
      <Header></Header>
      <main className="my-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/shipping" component={ShippingScreen}></Route>
          <Route path="/payment" component={PaymentScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/profile" component={ProfileScreen}></Route>
          {/* <Route path="/user" component={UserPage}></Route> */}
          <Route path="/product/:id" component={ProductDetails}></Route>
          <Route path="/cart/:id?" component={CartPage} exact></Route>
          <Route path="/admin/userlist" component={UserList}></Route>
          <Route path="/admin/user/:id/edit" component={UserEditPage}></Route>
          <Route exact path="/" component={HomePage}></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
