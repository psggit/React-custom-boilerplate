import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Login from "Container/login"
import "Sass/app.scss"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6676c1",
      main: "#005F9E",
      dark: "#2c3a7c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ed9638",
      main: "#E97C07",
      dark: "#a35604",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: [
      "Cabin",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
