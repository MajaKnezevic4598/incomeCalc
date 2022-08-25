import React from 'react';
import IncomeCalculator from './components/IncomeCalculator';

import store from './redux/store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<div className="font-body text-gray-700 flex justify-center items-center bg-slate-50 h-screen w-full ">
					<IncomeCalculator />
				</div>
			</PersistGate>
		</Provider>
	);
};

export default App;
