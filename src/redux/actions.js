import { CALCULATE, ADD_INCOME, SET_PERIOD, SET_INCOME_TYPE } from './types';

export const calculate = () => {
	return {
		type: CALCULATE,
	};
};

export const addIncome = (income) => {
	return {
		type: ADD_INCOME,
		payload: income,
	};
};

export const setPeriod = (period) => {
	return {
		type: SET_PERIOD,
		payload: period,
	};
};

export const setIncomeType = (incomeType) => {
	return {
		type: SET_INCOME_TYPE,
		payload: incomeType,
	};
};
