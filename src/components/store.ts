import {counterReducer} from "./CounterReducer";
import {legacy_createStore} from "redux";

export const store = legacy_createStore(counterReducer);

export type AppRootStateType = ReturnType<typeof counterReducer>

// @ts-ignore
window.store = store;