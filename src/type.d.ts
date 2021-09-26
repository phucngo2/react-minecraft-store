interface IProduct {
    id: number;
    name: string;
    img: string;
    price: number;
}

interface ICartItem {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
}

type ActionType = {
    type: string;
    payload: any;
};

type DispatchType = (args: ActionType) => ActionType;
