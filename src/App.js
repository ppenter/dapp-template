import logo from "./logo.svg";
import "./App.css";
import AppWithOutProviders from "./AppWithOutProviders";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { lightBlue, red } from "@mui/material/colors";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider) {
  return new Web3(provider);
}

const customTheme = {
  primary: "#73E7D4",
};

function App() {
  let base = {
    palette: {
      primary: {
        main: customTheme.primary,
      },
      secondary: {
        main: "#edf2ff",
      },
      action: {
        active: customTheme.primary,
        activeOpacity: 0,
        hover: customTheme.primary,
        hoverOpacity: 0.4,
        focus: customTheme.primary,
        focusOpacity: 0,
        selected: customTheme.primary,
        selectedOpacity: 0,
      },
    },
  };

  let themeDark = createTheme({
    ...base,
    palette: {
      ...base.palette,
      mode: "dark",
      background: {
        default: "#27282C",
      },
    },
  });

  let themeLight = createTheme({
    ...base,
  });

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider theme={themeDark}>
          <CssBaseline />
          <AppWithOutProviders />
        </ThemeProvider>
      </Web3ReactProvider>
    </>
  );
}

export default App;
