import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ItemApi } from "./Services/ItemAPI";

let rootReducer = combineReducers({
  [ItemApi.reducerPath]: ItemApi.reducer,
});

let setupStore = () => {
  let store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export default setupStore;
