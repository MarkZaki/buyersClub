import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink as BCNavLink,
	Container
} from "reactstrap";

import { AuthContext } from "../../store/auth.store";

export const NavComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const auth = useContext(AuthContext);
	const toggle = () => setIsOpen(!isOpen);
	const handleLogout = () => {
		auth.logout();
	};
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
							{auth.loggedIn ? (
								<React.Fragment>
									<NavItem>
										<NavLink
											to="/"
											exact
											className="nav-link aquabc__nav__link"
										>
											Home
										</NavLink>
									</NavItem>
									<NavItem>
										<BCNavLink onClick={handleLogout}>
											<span className="bc__nav__btn bc__nav__btn-red">
												Logout
											</span>
										</BCNavLink>
									</NavItem>
								</React.Fragment>
							) : (
								<React.Fragment>
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
								</React.Fragment>
							)}
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	);
};
