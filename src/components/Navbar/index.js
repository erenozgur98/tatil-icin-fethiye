import React from "react";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

function NavbarComponent() {

    const konaklama = [
        {
            title: 'Konaklama',
            route: '#'
        },
        {
            title: 'Konaklama',
            route: '#'
        },
        {
            title: 'Konaklama',
            route: '#'
        }
    ]

    const turlar = [
        {
            title: 'Turlar',
            route: '#'
        },
        {
            title: 'Turlar',
            route: '#'
        },
        {
            title: 'Turlar',
            route: '#'
        },
    ]

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container style={{ height: '5rem', fontSize: 'x-large' }}>
                    <Navbar.Brand href="/">Tatil Icin Fethiye</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavDropdown title="Konaklama" id="collasible-nav-dropdown">
                                {konaklama.map(item => (
                                    <NavDropdown.Item href={item.route}>{item.title}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title="Turlar" id="collasible-nav-dropdown">
                                {turlar.map(item => (
                                    <NavDropdown.Item href={item.route}>{item.title}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <Nav.Link href='#'><i class="fa fa-whatsapp" aria-hidden="true"></i> Bize Ulasin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent;
