export const ADD_TO_CART: string = "cart/add";
export const REMOVE_FROM_CART: string = "cart/remove";
export const UPDATE_QUANTITY_CART: string = "cart/update";

export const addToCart = (product: IProduct): ActionType => {
    return {
        type: ADD_TO_CART,
        payload: {
            ...product,
            quantity: 1,
        },
    };
};

export const removeFromCart = (productId: number): ActionType => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId,
    };
};

export const updateCartItemQuantity = (
    productId: number,
    addedQuantity: number
): ActionType => {
    return {
        type: UPDATE_QUANTITY_CART,
        payload: {
            productId,
            addedQuantity,
        },
    };
};
