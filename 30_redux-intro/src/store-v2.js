import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

// If there are more than one reducer then we need to combine those reducer and then
// we pass the combined reducer (say rootReducer) to createStore function.
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
