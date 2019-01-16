import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const appTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  shape: {
    borderRadius: 10,
  },
  spacing: {
    unit: 8
  }
});



export default appTheme;
