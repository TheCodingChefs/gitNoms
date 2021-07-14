import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../../assets/logolight.png'

export default function Navigation() {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="50%" alt="logo"/>
                </Navbar.Brand>
                <Nav className="navigation-bar">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#search">Advanced Search</Nav.Link>
                    <Nav.Link href="#add">Add</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <input placeholder='Search via keyword'type="text" />
                </Nav>
            </Container>
        </Navbar>
    )
}