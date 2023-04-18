import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#9ACD32',
          color: '#fafafa' // Replace with your desired color
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#CCC',
          fontWeight: '700',
          '&.Mui-selected': {
            color: '#9ACD32', // Your desired highlight color for the selected tab text
          },
          "@media (max-width: 768px)": {
            fontSize: "14px",
            fontWeight: '400',
            maxWidth: "10px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#fafafa',
          border: 'none',
          width: '80vh',
        },
        head: {
          fontWeight: '700',
          fontSize: '18px',
        },
      },
    },
  },
});
