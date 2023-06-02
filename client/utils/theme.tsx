
import { red, blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
      contrastText: '#000',
    },
    secondary: {
      main: blue[500]
    }
  },
});
