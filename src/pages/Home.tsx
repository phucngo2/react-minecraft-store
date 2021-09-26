import React from "react";

import Icon from "../components/Icon";
import PageWrapper from "../components/PageWrapper";
import ProductItem from "../components/ProductItem";

import { products } from "../utils/data";

const Home: React.FC = () => {
    return (
        <PageWrapper className="row m-0">
            <h3 className="py-2">
                <Icon icon="home" className="me-2" />
                Home
            </h3>
            {products.map((product: IProduct) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </PageWrapper>
    );
};

export default Home;
