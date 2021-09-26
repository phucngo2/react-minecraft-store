import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";
import Icon from "../components/Icon";
import PageWrapper from "../components/PageWrapper";
import { RootState } from "../store/reducer";
import { emerald } from "../utils/data";

const Cart: React.FC = () => {
    const cart: readonly ICartItem[] = useSelector(
        (state: RootState) => state.cart
    );

    return (
        <PageWrapper className="d-flex flex-column align-items-center">
            <h3 className="py-2">
                <Icon icon="shopping-cart" className="me-2" />
                Cart
            </h3>
            {cart.length === 0 ? (
                <h5>No Item 😭!</h5>
            ) : (
                <>
                    <div className="w-cart-container">
                        {cart.map((item: ICartItem) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <h4>
                        Total: {/* Calculate total price of the cart */}
                        {`${cart.reduce(
                            (sum: number, item: ICartItem): number =>
                                sum + item.price * item.quantity,
                            0
                        )} `}
                        <img
                            src={emerald}
                            alt="Emerald"
                            style={{ height: 24, width: 24 }}
                        />
                    </h4>
                </>
            )}
        </PageWrapper>
    );
};

export default Cart;
