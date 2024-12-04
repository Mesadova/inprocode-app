import { NavLink, Outlet } from "react-router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainMenu() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >Flights Catalog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <NavLink
                            to="/home"
                            style={({ isActive }) => {
                                return isActive ? { color: "plum", textDecoration: 'none' } : {textDecoration: 'none'};
                            }}
                        >
                        Home
                        </NavLink>
                        <NavLink
                            to="/map"
                            style={({ isActive }) => {
                                return isActive ? { color: "plum", textDecoration: 'none' } : {textDecoration: 'none'};
                            }}
                        >
                        Maps
                        </NavLink>
                        <NavLink
                            to="/fullCalendar"
                            style={({ isActive }) => {
                                return isActive ? { color: "plum", textDecoration: 'none' } : {textDecoration: 'none'};
                            }}
                        >
                        Full Calendar
                        </NavLink>
                        <NavLink
                            to="/graphs"
                            style={({ isActive }) => {
                                return isActive ? { color: "plum", textDecoration: 'none' } : {textDecoration: 'none'};
                            }}
                        >
                        Graphs
                        </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}