import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Icon from "./Icon";
import { RootState } from "../store/reducer";

const NavBar: React.FC = () => {
    const cart: readonly ICartItem[] = useSelector(
        (state: RootState) => state.cart
    );

    return (
        <nav
            className="navbar navbar-dark bg-dark container-fluid fixed-top px-5"
            style={{ width: "100vw" }}
        >
            <Link className="navbar-brand" to="/">
                <Icon icon="home" className="me-2" />
                Home
            </Link>
            <Link
                className="btn rounded-circle text-center d-flex flex-row justify-content-center align-items-center position-relative"
                style={{ width: 40, height: 40 }}
                to="/cart"
            >
                <Icon icon="shopping-cart" color="white" className="m-auto" />
                <span
                    className="position-absolute start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ top: "15%" }}
                >
                    {cart.length}
                </span>
            </Link>
        </nav>
    );
};

export default NavBar;
