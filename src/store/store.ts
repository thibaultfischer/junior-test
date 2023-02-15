import { legacy_createStore as createStore } from "redux";
import appReducer from "./reducers/app.reducer";

const store = createStore(appReducer);

export default store;