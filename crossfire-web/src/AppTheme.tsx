import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

type AppThemeProps = {
  children: React.ReactNode;
};

const AppTheme: React.FC<AppThemeProps> = (props) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppTheme;
