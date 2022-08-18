import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#556cd6",
    // },
    // secondary: {
    //   main: "#19857b",
    // },
    // mehroon:{
    //   main:"#8d40ff"
    // },
    error: {
      main: red.A400,
    },
  },

  components: {
    // MuiTypography: {
    //   defaultProps: {
    //     variantMapping: {
    //       h1: "h2",
    //       h2: "h2",
    //       h3: "h2",
    //       h4: "h2",
    //       h5: "h2",
    //       h6: "h2",
    //       subtitle1: "h2",
    //       subtitle2: "h2",
    //       body1: "span",
    //       body2: "span",
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          textTransform: "capitalize",
          background: "#1890FF",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          wrapper: {
            flexDirection: 'row'
          },
          MuiTabIndicator: {
            backgroundColor: "red"
          },
        },
      },
    },

    //  TextField overrides styles
    MuiTextField: {
      styleOverrides: {
        root: {
          outlineColor: "#8D40FF",
          // height:"15px"
          // height:"30px",
          padding: "0px",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          border: "1px solid transparent",
          padding: "0px",
          borderRadius: "5px",
          outlineColor: "1px solid transparent",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "1px solid transparent",
          borderRadius: "5px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    // MuiSelect: {
    //   styleOverrides: {
    //     root: {
    //       padding: "0",
    //     },
    //   },
    // },
    // MuiAutocomplete: {
    //   styleOverrides: {
    //     root: {
    //       outline: "none",
    //     },
    //   },
    // },
  },
});

export default theme;
