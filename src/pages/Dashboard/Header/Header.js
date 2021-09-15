import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Input,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { updateFilters } from '../../../slices/products';

const Header = () => {
    const dispatch = useDispatch();
    const searchText = useSelector(state => state.products.filters.searchText);
    return (
        <Navbar color="light" light>
            <NavbarBrand className="col-md-3 ms-3" >Loop Shop</NavbarBrand>
            <Nav className="col-md-5 ms-3" navbar>
                <NavItem>
                    <Input
                        type="search"
                        placeholder="Search Products"
                        value={searchText}
                        onChange={(event) => dispatch(updateFilters({type: 'searchText', filters: event.target.value}))}
                    />
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;