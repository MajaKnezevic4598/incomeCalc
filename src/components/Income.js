import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Income() {
	const weekly = useSelector((state) => state.incomes.weekly);
	const fortnightly = useSelector((state) => state.incomes.fortnightly);
	const monthly = useSelector((state) => state.incomes.monthly);
	const annually = useSelector((state) => state.incomes.annually);

	const incomeType = useSelector((state) => state.incomeType);
	const inputValue = useSelector((state) => state.inputValue);
	const incomes = useSelector((state) => state.incomes);
	const period = useSelector((state) => state.period);

	const [showIncome, setShowIncome] = useState('');
	const [toggledPeriod, setToggledPeriod] = useState('');
	const [showMenu, setShowMenu] = useState(false);

	const toggledIncomeValue =
		incomeType === 'net'
			? incomes[`${period.toLowerCase()}`]['gross']
			: incomes[`${period.toLowerCase()}`]['net'];

	const toggledIncomeType = incomeType === 'net' ? 'gross' : 'net';

	const incomeValues =
		incomeType === 'net'
			? {
					annually: useSelector((state) => state.incomes.annually.gross),
					monthly: useSelector((state) => state.incomes.monthly.gross),
					fortnightly: useSelector((state) => state.incomes.fortnightly.gross),
					weekly: useSelector((state) => state.incomes.weekly.gross),
			  }
			: {
					annually: useSelector((state) => state.incomes.annually.net),
					monthly: useSelector((state) => state.incomes.monthly.net),
					fortnightly: useSelector((state) => state.incomes.fortnightly.net),
					weekly: useSelector((state) => state.incomes.weekly.net),
			  };

	console.log(incomeValues);

	return (
		<>
			<div className="flex flex-col bg-green-200 rounded-md w-[95%] mx-auto  p-4 mb-4">
				<div className="flex flex-col mb-4   items-center md:flex-row">
					<div className="w-40 h-14  rounded-md flex justify-center items-center mr-3 bg-green-500 text-xl font-bold">
						<span className="mr-2">$</span>
						<span>{showIncome ? showIncome : toggledIncomeValue}</span>
					</div>
					<div className=" font-bold flex space-x-1">
						<div>your {toggledIncomeType}</div>
						<div className="flex relative">
							<div
								className="border-b-2 border-green-600 cursor-pointer"
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								{toggledPeriod ? toggledPeriod : period.toLowerCase()}
							</div>
							<div
								className={`absolute top-[140%] bg-slate-50 rounded-md ${
									showMenu ? 'block' : 'hidden'
								}`}
							>
								<div className="relative border rounded-md font-normal px-2 py-2 text-sm space-y-1 after:content-[''] after:absolute after:w-[12px] after:h-[12px] after:border after:bg-slate-50 after:top-0 after:right-[40px] after:rotate-45 after:mt-[-6px] after:border-r-0 after:border-b-0">
									<p
										className="border-b  hover:bg-gray-200 hover:text-green-500 cursor-pointer"
										id={incomeValues.weekly}
										onClick={(e) => {
											setShowIncome(e.currentTarget.id);
											setToggledPeriod('weekly');
											setShowMenu(!showMenu);
										}}
									>
										Weekly
									</p>
									<p
										className="border-b  hover:bg-gray-200 hover:text-green-500 cursor-pointer"
										id={incomeValues.fortnightly}
										onClick={(e) => {
											setShowIncome(e.currentTarget.id);
											setToggledPeriod('fortnightly');
											setShowMenu(!showMenu);
										}}
									>
										Fortnightly
									</p>
									<p
										className="border-b  hover:bg-gray-200 hover:text-green-500 cursor-pointer"
										id={incomeValues.monthly}
										onClick={(e) => {
											setShowIncome(e.currentTarget.id);
											setToggledPeriod('monthly');
											setShowMenu(!showMenu);
										}}
									>
										Monthly
									</p>
									<p
										className="border-b  hover:bg-gray-200 hover:text-green-500 cursor-pointer"
										id={incomeValues.annually}
										onClick={(e) => {
											setShowIncome(e.currentTarget.id);
											setToggledPeriod('annually');
											setShowMenu(!showMenu);
										}}
									>
										Annually
									</p>
								</div>
							</div>
						</div>
						<div>income</div>
					</div>
				</div>
				<div className="flex flex-col space-y-3 rounded-md bg-slate-50 p-2 mb-4">
					<div className="border-b py-1 flex">
						<div className="w-1/4 font-bold">Frequency</div>
						<div className="w-1/4 font-bold">Gross Income</div>
						<div className="w-1/4 font-bold">Tax</div>
						<div className="w-1/4 font-bold">Net Income</div>
					</div>
					<div className="border-b  py-1 flex">
						<div className="w-1/4 font-bold">Weekly</div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{weekly.gross}
						</div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{weekly.tax}
						</div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{weekly.net}
						</div>
					</div>
					<div className="border-b py-1 flex">
						<div className="w-1/4 font-bold">Fortnightly </div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{fortnightly.gross}
						</div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{fortnightly.tax}
						</div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{fortnightly.net}
						</div>
					</div>
					<div className="border-b py-1 flex">
						<div className="w-1/4 font-bold">Monthly </div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{monthly.gross}
						</div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{monthly.tax}
						</div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{monthly.net}
						</div>
					</div>
					<div className="border-b py-1 flex">
						<div className="w-1/4 font-bold">Annually</div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{annually.gross}
						</div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{annually.tax}
						</div>
						<div className="w-1/4">
							<span className="mr-[2px] ">$</span>
							{annually.net}
						</div>
					</div>
				</div>
			</div>
			<div className="px-10 py-2 rounded flex items-center justify-between bg-orange-100 font-semibold w-[95%] mx-auto mb-6">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-14 h-14 text-orange-300"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
						/>
					</svg>
				</div>
				<div>Compare lenders and get your finance </div>
				<button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">
					Apply now
				</button>
			</div>
		</>
	);
}

export default Income;
