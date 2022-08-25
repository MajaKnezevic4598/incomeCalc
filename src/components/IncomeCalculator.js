import React, { useState } from 'react';
import Income from './Income';
import IncomeDetails from './IncomeDetails';
import Header from './Header';

import '../app.css';

function IncomeCalculator() {
	const [activeTab, setActiveTab] = useState('income-details');

	return (
		<div className="w-[95%] md:w-3/5   min-h-2/3 flex rounded ">
			<div className=" w-[10%] md:w-[5%] flex-col">
				<div
					className={`mb-4  tab ${
						activeTab == 'income-details' ? 'active' : ''
					}`}
					onClick={() => setActiveTab('income-details')}
				>
					Income details
				</div>
				<div
					className={`tab ${activeTab === 'income' ? 'active' : ''}`}
					onClick={() => setActiveTab('income')}
				>
					Income
				</div>
			</div>
			<div className="border w-[94%] flex flex-col rounded-md rounded-tl-none shadow-md">
				<Header />
				<>
					{activeTab === 'income' && <Income />}
					{activeTab === 'income-details' && (
						<IncomeDetails setTab={setActiveTab} />
					)}
				</>
			</div>
		</div>
	);
}

export default IncomeCalculator;
