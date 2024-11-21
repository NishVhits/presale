import "./assets/style/global.css";
import "./assets/style/global.responsive.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Routes from "./routes/Routes";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Toaster } from "react-hot-toast";

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: "normal",
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <TonConnectUIProvider manifestUrl="https://bizzon.appworkdemo.com/tonconnect-manifest.json">
        <div className="App">
          <Toaster
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                maxWidth: "unset",
              },
            }}
          />
          <Routes />
        </div>
      </TonConnectUIProvider>
    </ThemeProvider>
  );
}

export default App;
