import { configureStore } from "@reduxjs/toolkit";
import func from "./middleware/func";
import logger from "./middleware/logger";
import shoppingCartReducer from "./shoppingCartSlice";

export default configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
  middleware: [logger, func],
});
