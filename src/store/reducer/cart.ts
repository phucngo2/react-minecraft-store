import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY_CART } from "../action";

const initialState: ICartItem[] = [];

const cartReducer = (
    state: ICartItem[] = initialState,
    action: ActionType
): ICartItem[] => {
    switch (action.type) {
        // Add new item to cart
        // Payload: product obj with quantity = 1
        case ADD_TO_CART: {
            // If product is already in cart => increate quantity by 1
            if (state.some((item) => item.id === action.payload.id)) {
                const newCart: ICartItem[] = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }

                    return item;
                });

                return newCart;
            }

            const newCart: ICartItem[] = [...state, action.payload];
            return newCart;
        }

        // Remove an item from cart
        // Payload: product obj id
        case REMOVE_FROM_CART: {
            const newCart: ICartItem[] = state.filter(
                (item) => item.id !== action.payload
            );

            return newCart;
        }

        // Update quantity of an item in cart
        // Payload: an obj that contains productId and added Quantity
        case UPDATE_QUANTITY_CART: {
            const newCart: ICartItem[] = state.map((item) => {
                if (item.id === action.payload.productId) {
                    return {
                        ...item,
                        quantity: item.quantity + action.payload.addedQuantity,
                    };
                }

                return item;
            });

            return newCart;
        }

        // Default: return state
        default: {
            return state;
        }
    }
};

export default cartReducer;
