import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#00FFFF",
          color: "#fafafa",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#7e7a7a",
          fontWeight: "700",
          "&.Mui-selected": {
            color: "#FFFFFF",
          },
          "@media (max-width: 768px)": {
            fontSize: "14px",
            fontWeight: "400",
            maxWidth: "10px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#fafafa",
          border: "none",
          width: "80vh",
        },
        head: {
          fontWeight: "700",
          fontSize: "18px",
        },
      },
    },
  },
});
