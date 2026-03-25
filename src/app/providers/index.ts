import { compose } from "@reduxjs/toolkit";
import { withTheme } from "./MUI";
import { withToastify } from "./Toastyfy";

export const withProviders = compose(withTheme, withToastify);
