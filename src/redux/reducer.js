import { CALCULATE, ADD_INCOME, SET_PERIOD, SET_INCOME_TYPE } from './types';

const initialState = {
	incomeValue: '',
	tax: 0.35,
	period: 'Monthly',
	incomeType: '',
	incomes: {
		weekly: {
			gross: 0,
			net: 0,
			tax: 0,
		},
		fortnightly: {
			gross: 0,
			net: 0,
			tax: 0,
		},
		monthly: {
			gross: 0,
			net: 0,
			tax: 0,
		},
		annually: {
			gross: 0,
			net: 0,
			tax: 0,
		},
	},
};

export const incomeReducer = (state = initialState, action) => {
	switch (action.type) {
		case CALCULATE:
			const income = Number(state.incomeValue.split('.').join(''));
			if (state.period === 'Annually' && state.incomeType === 'gross') {
				return {
					...state,
					incomes: {
						weekly: {
							gross: Math.round(income / 48).toLocaleString('en'),
							net: grossToNet(income / 48).toLocaleString('en'),
							tax: (
								Math.round(income / 48) - grossToNet(income / 48)
							).toLocaleString('en'),
						},
						fortnightly: {
							gross: Math.round(income / 24).toLocaleString('en'),
							net: grossToNet(income / 24).toLocaleString('en'),
							tax: Math.round(
								income / 24 - grossToNet(income / 24)
							).toLocaleString('en'),
						},
						monthly: {
							gross: Math.round(income / 12).toLocaleString('en'),
							net: grossToNet(income / 12).toLocaleString('en'),
							tax: Math.round(
								income / 12 - grossToNet(income / 12)
							).toLocaleString('en'),
						},
						annually: {
							gross: income.toLocaleString('en'),
							net: grossToNet(income).toLocaleString('en'),
							tax: Math.round(income - grossToNet(income)).toLocaleString('en'),
						},
					},
				};
			}

			if (state.period === 'Annually' && state.incomeType === 'net') {
				return {
					...state,
					incomes: {
						weekly: {
							gross: netToGross(income / 48).toLocaleString('en'),
							net: Math.round(income / 48).toLocaleString('en'),
							tax: Math.round(
								netToGross(income / 48) - income / 48
							).toLocaleString('en'),
						},
						fortnightly: {
							gross: netToGross(income / 24).toLocaleString('en'),
							net: Math.round(income / 24).toLocaleString('en'),
							tax: Math.round(
								netToGross(income / 24) - income / 24
							).toLocaleString('en'),
						},
						monthly: {
							gross: netToGross(income / 12).toLocaleString('en'),
							net: Math.round(income / 12).toLocaleString('en'),
							tax: Math.round(
								netToGross(income / 12) - income / 12
							).toLocaleString('en'),
						},
						annually: {
							gross: netToGross(income).toLocaleString('en'),
							net: income.toLocaleString('en'),
							tax: Math.round(netToGross(income) - income).toLocaleString('en'),
						},
					},
				};
			}
			if (state.period === 'Monthly' && state.incomeType === 'net') {
				return {
					...state,
					incomes: {
						weekly: {
							gross: netToGross(income / 4).toLocaleString('en'),
							net: Math.round(income / 4).toLocaleString('en'),
							tax: Math.round(
								netToGross(income / 4) - income / 4
							).toLocaleString('en'),
						},
						fortnightly: {
							gross: netToGross(income / 2).toLocaleString('en'),
							net: Math.round(income / 2).toLocaleString('en'),
							tax: Math.round(
								netToGross(income / 2) - income / 2
							).toLocaleString('en'),
						},
						monthly: {
							gross: netToGross(income).toLocaleString('en'),
							net: income.toLocaleString('en'),
							tax: Math.round(netToGross(income) - income).toLocaleString('en'),
						},
						annually: {
							gross: netToGross(income * 12).toLocaleString('en'),
							net: Math.round(income * 12).toLocaleString('en'),
							tax: Math.round(
								netToGross(income * 12) - income * 12
							).toLocaleString('en'),
						},
					},
				};
			}

			if (state.period === 'Monthly' && state.incomeType === 'gross') {
				return {
					...state,
					incomes: {
						weekly: {
							gross: Math.round(income / 4).toLocaleString('en'),
							net: grossToNet(income / 4).toLocaleString('en'),
							tax: Math.round(
								income / 4 - grossToNet(income / 4)
							).toLocaleString('en'),
						},
						fortnightly: {
							gross: Math.round(income / 2).toLocaleString('en'),
							net: grossToNet(income / 2).toLocaleString('en'),
							tax: Math.round(
								income / 2 - grossToNet(income / 2)
							).toLocaleString('en'),
						},
						monthly: {
							gross: income.toLocaleString('en'),
							net: grossToNet(income).toLocaleString('en'),
							tax: Math.round(income - grossToNet(income)).toLocaleString('en'),
						},
						annually: {
							gross: Math.round(income * 12).toLocaleString('en'),
							net: grossToNet(income * 12).toLocaleString('en'),
							tax: Math.round(
								income * 12 - grossToNet(income * 12)
							).toLocaleString('en'),
						},
					},
				};
			}

			if (state.period === 'Fortnightly' && state.incomeType === 'gross') {
				return {
					...state,
					incomes: {
						weekly: {
							gross: (income / 2).toLocaleString('en'),
							net: grossToNet(income / 2).toLocaleString('en'),
							tax: Math.round(
								income / 2 - grossToNet(income / 2)
							).toLocaleString('en'),
						},
						fortnightly: {
							gross: income.toLocaleString('en'),
							net: grossToNet(income).toLocaleString('en'),
							tax: Math.round(income - grossToNet(income)).toLocaleString('en'),
						},
						monthly: {
							gross: (income * 2).toLocaleString('en'),
							net: grossToNet(income * 2).toLocaleString('en'),
							tax: Math.round(
								income * 2 - grossToNet(income * 2)
							).toLocaleString('en'),
						},
						annually: {
							gross: (income * 24).toLocaleString('en'),
							net: grossToNet(income * 24).toLocaleString('en'),
							tax: Math.round(
								income * 24 - grossToNet(income * 24)
							).toLocaleString('en'),
						},
					},
				};
			}

			if (state.period === 'Fortnightly' && state.incomeType === 'net') {
				return {
					...state,
					incomes: {
						weekly: {
							gross: netToGross(income / 2).toLocaleString('en'),
							net: (income / 2).toLocaleString('en'),
							tax: Math.round(
								netToGross(income / 2) - income / 2
							).toLocaleString('en'),
						},
						fortnightly: {
							gross: netToGross(income).toLocaleString('en'),
							net: income.toLocaleString('en'),
							tax: Math.round(netToGross(income) - income).toLocaleString('en'),
						},
						monthly: {
							gross: netToGross(income * 2).toLocaleString('en'),
							net: (income * 2).toLocaleString('en'),
							tax: Math.round(
								netToGross(income * 2) - income * 2
							).toLocaleString('en'),
						},
						annually: {
							gross: netToGross(income * 24).toLocaleString('en'),
							net: (income * 24).toLocaleString('en'),
							tax: Math.round(
								netToGross(income * 24) - income * 24
							).toLocaleString('en'),
						},
					},
				};
			}

			if (state.period === 'Weekly' && state.incomeType === 'net') {
				return {
					...state,
					incomes: {
						weekly: {
							gross: netToGross(income).toLocaleString('en'),
							net: income.toLocaleString('en'),
							tax: Math.round(netToGross(income) - income).toLocaleString('en'),
						},
						fortnightly: {
							gross: netToGross(income * 2).toLocaleString('en'),
							net: (income * 2).toLocaleString('en'),
							tax: Math.round(
								netToGross(income * 2) - income * 2
							).toLocaleString('en'),
						},
						monthly: {
							gross: netToGross(income * 4).toLocaleString('en'),
							net: (income * 4).toLocaleString('en'),
							tax: Math.round(
								netToGross(income * 4) - income * 4
							).toLocaleString('en'),
						},
						annually: {
							gross: netToGross(income * 48).toLocaleString('en'),
							net: (income * 48).toLocaleString('en'),
							tax: Math.round(
								netToGross(income * 48) - income * 48
							).toLocaleString('en'),
						},
					},
				};
			}

			if (state.period === 'Weekly' && state.incomeType === 'gross') {
				return {
					...state,
					incomes: {
						weekly: {
							gross: income.toLocaleString('en'),
							net: grossToNet(income).toLocaleString('en'),
							tax: Math.round(income - grossToNet(income)).toLocaleString('en'),
						},
						fortnightly: {
							gross: (income * 2).toLocaleString('en'),
							net: grossToNet(income * 2).toLocaleString('en'),
							tax: Math.round(
								income * 2 - grossToNet(income * 2)
							).toLocaleString('en'),
						},
						monthly: {
							gross: (income * 4).toLocaleString('en'),
							net: grossToNet(income * 4).toLocaleString('en'),
							tax: Math.round(
								income * 4 - grossToNet(income * 4)
							).toLocaleString('en'),
						},
						annually: {
							gross: (income * 48).toLocaleString('en'),
							net: grossToNet(income * 48).toLocaleString('en'),
							tax: Math.round(
								income * 24 - grossToNet(income * 48)
							).toLocaleString('en'),
						},
					},
				};
			}

		case ADD_INCOME:
			return {
				...state,
				incomeValue: action.payload,
			};
		case SET_PERIOD:
			return {
				...state,
				period: action.payload,
			};
		case SET_INCOME_TYPE: {
			return {
				...state,
				incomeType: action.payload,
			};
		}

		default:
			return state;
	}
};

//helper function to calculate net income from gross income
const grossToNet = (income) => {
	const net = Math.round(income * (1 - initialState.tax));

	return net;
};

// helper function to calculate gross income from net income

const netToGross = (income) => {
	const gross = Math.round(income / (1 - initialState.tax));

	return gross;
};
