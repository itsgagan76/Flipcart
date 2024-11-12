import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';

function Routing() {
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          
           <Link to="/">Home</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/jewelery">Jewelery</Link>
            <Link to="/men">Man Cloths</Link>
            <Link to="/woman">Woman Cloths</Link>
            <Link><button>Login</button></Link>
            <Link><button>Register</button></Link>
          
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' Component={Home}></Route>
      </Routes>
    

     
    </>
  );
}

export default Routing;