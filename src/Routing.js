import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function Routing() {
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/jewelery">Jewelery</Nav.Link>
            <Nav.Link href="/men">Man Cloths</Nav.Link>
            <Nav.Link href="/woman">Woman Cloths</Nav.Link>
            <Nav.Link><button>Login</button></Nav.Link>
            <Nav.Link><button>Register</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
      </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default Routing;