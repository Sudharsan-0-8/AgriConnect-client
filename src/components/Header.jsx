import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

    const navigate = useNavigate();

    return (
        <Navbar className="header" bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand>Social</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link 
                    onClick={ ()=>navigate('/') }
                >Home</Nav.Link>
                <Nav.Link
                    onClick={ ()=>navigate('/login') }
                >Login</Nav.Link>
                <Nav.Link
                    onClick={ ()=>navigate('/register') }
                >Register</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Header;
