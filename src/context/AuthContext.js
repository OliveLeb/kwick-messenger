import CreateContext from './CreateContext';
import AuthReducer, { initialState } from '../reducer/AuthReducer';
import actions from '../actions/authActions';

export const { Context, Provider } = CreateContext(AuthReducer, actions ,initialState);
