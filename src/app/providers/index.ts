import { compose } from "@reduxjs/toolkit";
import { withTheme } from "./MUI";
import { withToastify } from "./Toastyfy";
import { withAuthProvider } from "features/authRouting/AuthProvider";

export const withProviders: (Component: React.ComponentType) => React.ComponentType = compose(withAuthProvider, withTheme, withToastify);
