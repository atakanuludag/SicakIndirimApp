import { CounterState } from "./counter/types";

export default interface State {
    counterReducers: CounterState;
}