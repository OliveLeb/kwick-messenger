import actions from "../actions/dataActions";
import DataReducer, { initialState } from "../reducer/DataReducer";
import CreateContext from "./CreateContext";

export const { Context, Provider } = CreateContext(DataReducer, actions, initialState);