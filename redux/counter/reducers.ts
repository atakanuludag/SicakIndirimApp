import { CounterActionType, CounterState, CounterActions } from "./types";
import { Action } from "redux";

//Mutable & immutable
//Reducers içinde bir apiye bağlanılmaz veya veritabanı işlemleri yapılmaz.
//Reducers'in amacı state bilgisini döndürmektir.


const initialState: CounterState = {
    count: 0
};

const count = (
    state: CounterState = initialState,
    action: Action | CounterActions
): CounterState => {
    switch (action.type) {
        case CounterActionType.INCREMENT:
            return { ...state, count: state.count + 1 };
        case CounterActionType.DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default count;
