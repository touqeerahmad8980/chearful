import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <div className='Header_part'>
            <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img className='brand_logo' src="assets/images/brand-logo.svg" alt="Chearful" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='link_item' to="/">Explore</Link>
                            <Link className='link_item' to="/">About</Link>
                            <Link className='link_item' to="/">Contact us</Link>
                            <Link className='link_item' to="/">Placeholder</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center action_btn_wrap'>
                            <Button className='language_btn' variant='outline-dark'>
                                <img className='me-1' src='assets/images/flag.png' alt='UAE Flag' /> <img src='assets/images/arrow_down.svg' alt='arrow down' />
                            </Button>
                            <Button className='language_btn' variant='outline-dark'>
                                <img src='assets/images/language-icon.svg' alt='Language' />En <img src='assets/images/arrow_down.svg' alt='arrow down' />
                            </Button>
                            <Button className='action_button custom_outlined' variant='outline-dark'>Sign up</Button>
                            <Button className='action_button text-white'>Log in</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;