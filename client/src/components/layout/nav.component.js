import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Container
} from "reactstrap";

export const NavComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<Navbar color="light" light expand="md">
				<Container>
					<NavbarBrand className="text-bold bc__nav__brand">
						Buyers<span className="text-success">Club</span>
					</NavbarBrand>

					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink to="/" exact className="nav-link aquabc__nav__link">
									Home
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									to="/login"
									exact
									className="nav-link aquabc__nav__link"
								>
									Login
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									to="/register"
									exact
									className="nav-link aquabc__nav__link"
								>
									register
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	);
};
