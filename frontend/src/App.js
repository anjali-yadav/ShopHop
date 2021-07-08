import {Container} from 'react-bootstrap'; 
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import CartPage from './pages/CartPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <Router>
      <Header></Header>
      <main className="my-3">
        <Container>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/user" component={UserPage}></Route>
          <Route path="/product/:id" component={ProductDetails}></Route>
          <Route path="/cart/:id?" component={CartPage} exact></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
