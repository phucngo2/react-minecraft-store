import React from "react";
import { useDispatch } from "react-redux";

import Icon from "./Icon";
import { addToCart } from "../store/action";
import { emerald } from "../utils/data";

type Props = {
    product: IProduct;
};

const ProductItem: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="col-6 col-md-2 p-2">
            <div className="card">
                <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                />
                <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="o-55">
                        {product.price}{" "}
                        <img
                            src={emerald}
                            alt="Emerald"
                            style={{ height: 24, width: 24 }}
                        />
                    </p>
                    <button
                        className="btn btn-success"
                        onClick={() => dispatch(addToCart(product))}
                    >
                        <Icon icon="plus" className="me-2" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
