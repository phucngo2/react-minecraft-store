import { createStore, Store } from "redux";
import reducer, { RootState } from "./reducer";

const store: Store<RootState, ActionType> & { dispatch: DispatchType } =
    createStore(reducer);

export default store;
