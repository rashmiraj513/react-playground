import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };
    case 'account/applyLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case 'account/repayLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case 'customer/updateName':
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
};

// If there are more than one reducer then we need to combine those reducer and then
// we pass the combined reducer (say rootReducer) to createStore function.
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// Dispatching actions using the type for account
// store.dispatch({ type: 'account/deposit', payload: 50 });
// console.log(store.getState());

// store.dispatch({ type: 'account/withdraw', payload: 20 });
// console.log(store.getState());

// store.dispatch({
//   type: 'account/applyLoan',
//   payload: { amount: 1000, purpose: 'Buy a cheap car' },
// });
// console.log(store.getState());

// store.dispatch({ type: 'account/repayLoan' });
// console.log(store.getState());

// Action Creator function for accountReducer
const deposit = (amount) => {
  return { type: 'account/deposit', payload: amount };
};

const withdraw = (amount) => {
  return { type: 'account/withdraw', payload: amount };
};

const applyLoan = (amount, purpose) => {
  return { type: 'account/applyLoan', payload: { amount, purpose } };
};

const repayLoan = () => {
  return { type: 'account/repayLoan' };
};

// Dispatching actions using Action Creator functions for account
store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(applyLoan(1000, 'Buy a cheap car'));
console.log(store.getState());

store.dispatch(repayLoan());
console.log(store.getState());

// Dispatching actions using type for customers
// store.dispatch({
//   type: 'customer/createCustomer',
//   payload: {
//     fullName: 'Rashmi Raj',
//     nationalID: '1234567890',
//     createdAt: new Date().toISOString(),
//   },
// });
// console.log(store.getState());

// store.dispatch({ type: 'customer/updateName', payload: 'Rashmi Raj aka Sonu' });
// console.log(store.getState());

// Action Create functions for customerReducer
const createCustomer = (fullName, nationalID) => {
  return {
    type: 'customer/createCustomer',
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
};

const updateName = (fullName) => {
  return { type: 'customer/updateName', payload: fullName };
};

// Dispatching actions using Action Creator functions for customer
store.dispatch(createCustomer('Rashmi Raj', 1234567890));
console.log(store.getState());

store.dispatch(updateName('Rashmi Raj aka Sonu'));
store.dispatch(deposit(5000));
console.log(store.getState());
