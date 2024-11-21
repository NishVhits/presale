import { Buffer } from "buffer";
if (typeof window !== "undefined") {
  window.Buffer = Buffer;
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import Store from "./redux/Store.ts";
import { PersistGate } from "redux-persist/integration/react";
const persistStore = Store();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={persistStore.store}>
      <PersistGate persistor={persistStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
