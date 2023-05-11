import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./features/RootReducer";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["shoppingcart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(Store);
