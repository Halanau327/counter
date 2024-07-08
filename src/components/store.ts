import {counterReducer} from "./CounterReducer";
import {legacy_createStore} from "redux";

const rootReducer = counterReducer

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>