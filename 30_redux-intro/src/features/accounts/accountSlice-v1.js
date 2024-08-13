const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
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
    case 'account/convertingCurrency':
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

// Action Creator function for accountReducer
export const deposit = (amount, currency) => {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };

  return async (dispatch) => {
    dispatch({ type: 'account/convertingCurrency' });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: 'account/deposit', payload: converted });
  };
};

export const withdraw = (amount) => {
  return { type: 'account/withdraw', payload: amount };
};

export const applyLoan = (amount, purpose) => {
  return { type: 'account/applyLoan', payload: { amount, purpose } };
};

export const repayLoan = () => {
  return { type: 'account/repayLoan' };
};

export default accountReducer;
