import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import Icon from "./Icon";

import { removeFromCart, updateCartItemQuantity } from "../store/action";
import { emerald } from "../utils/data";

type Props = {
    item: ICartItem;
};

const CartItem: React.FC<Props> = ({ item }) => {
    const dispatch: Dispatch = useDispatch();

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-4">
                    <img
                        src={item.img}
                        className="img-fluid rounded-start"
                        alt={item.name}
                    />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h6 className="card-title">{item.name}</h6>
                        <p className="card-text o-55">
                            {`${item.price} `}
                            <img
                                src={emerald}
                                alt="Emerald"
                                style={{
                                    height: 24,
                                    width: 24,
                                }}
                            />
                        </p>
                        <p className="card-text d-flex flex-row justify-content-between">
                            <div className="input-group mx-2">
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            updateCartItemQuantity(item.id, -1)
                                        )
                                    }
                                    disabled={item.quantity === 1}
                                >
                                    <Icon icon="minus" />
                                </button>
                                <input
                                    type="text"
                                    className="form-control"
                                    disabled
                                    value={item.quantity}
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            updateCartItemQuantity(item.id, 1)
                                        )
                                    }
                                >
                                    <Icon icon="plus" />
                                </button>
                            </div>
                            <button
                                className="btn btn-danger"
                                onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                }
                            >
                                <Icon icon="trash" />
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
