import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = () => {
  const store: EnhancedStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST"],
          ignoredPaths: ["register", "rehydrate"],
        },
      }).concat(thunk),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export default Store;
