import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../../assets/logodark.png'
import { useState } from 'react';
import { useHistory } from "react-router";

import Search from "../search/Search";

export default function Navigation( {setSearch, search, toggleDarkMode} ) {
    
    const history = useHistory();

    // const [search, setSearch] = useState('');

    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} width="50%" alt="logo"/>
                </Navbar.Brand>
                <Nav className="navigation-bar">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/advanced">Advanced Search</Nav.Link>
                    <Nav.Link href="/add">Add</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        history.push(`/search/${search}`)
                    }} action="">
                        <input onChange={(e)=> {setSearch(e.target.value)}} placeholder='Search via keyword'type="text" />
                    </form>
                    <button onClick={toggleDarkMode}>
                    {/* {darkMode ? "Light Mode" : "Dark Mode"} */}
                    </button>
                </Nav>
            </Container>
        </Navbar>
    )
}