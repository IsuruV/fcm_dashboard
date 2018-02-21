import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
class FcmFilter extends Component{
    render(){
        return(
            <Navbar style={{ width: '80%', margin: '0 auto' }}>
            <Nav>
            <NavItem>
                <NavDropdown eventKey="4" title="Compare" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Yeare to Date</MenuItem>
                    <MenuItem eventKey="4.2">Same Period Last Year</MenuItem>
                    <MenuItem eventKey="4.3">Last Month/Week/Day</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.4"></MenuItem>
                </NavDropdown>
            </NavItem>
            <NavItem>    
                <NavDropdown eventKey="4" title="Sort" id="nav-dropdown">
                    <MenuItem eventKey="4.1">By Department</MenuItem>
                    <MenuItem eventKey="4.2">Worst to Best</MenuItem>
                    <MenuItem eventKey="4.3">Best to Worst</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.4"></MenuItem>
                </NavDropdown>
            </NavItem>
            </Nav>
            </Navbar>
            )
    }
}

export default FcmFilter;