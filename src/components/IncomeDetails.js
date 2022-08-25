import React, { useState, useEffect } from 'react';
import Input from './Input';
import { useSelector, useDispatch } from 'react-redux';
import { calculate, setIncomeType } from '../redux/actions';

function IncomeDetails({ setTab }) {
	const [activeButton1, setActiveButton1] = useState(false);
	const [activeButton2, setActiveButton2] = useState(false);

	const income = useSelector((state) => state.incomeValue);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIncomeType(''));
	}, []);

	useEffect(() => {
		if (activeButton1) {
			dispatch(setIncomeType('net'));
		}
	}, [activeButton1]);

	useEffect(() => {
		if (activeButton2) {
			dispatch(setIncomeType('gross'));
		}
	}, [activeButton2]);

	return (
		<section className="py-2 px-4">
			<p className="text-lg mb-3 font-semibold">What is your total income?</p>
			<Input />
			<p className="text-lg mb-3 mt-7 font-semibold">
				Please choose the income type
			</p>
			<div className="flex w-5/6 justify-between mb-6">
				<button
					className={`btn w-[48%] ${
						activeButton1
							? 'bg-green-500 text-white border-green-500'
							: 'hover:text-green-600'
					}`}
					onClick={() => {
						setActiveButton1(true);
						setActiveButton2(false);
					}}
				>
					Net income
				</button>
				<button
					className={`btn w-[48%] ${
						activeButton2
							? 'bg-green-500 text-white border-green-500'
							: 'hover:text-green-600'
					}`}
					onClick={() => {
						setActiveButton1(false);
						setActiveButton2(true);
					}}
				>
					Gross income
				</button>
			</div>
			<button
				className={`btn w-5/6 flex items-center justify-center mb-20 ${
					activeButton1 || activeButton2
						? 'bg-green-500 text-white border-green-500'
						: ' bg-gray-500 text-white border-gray-500'
				}`}
				onClick={() => {
					if (income === '0') {
						alert('income can not be zero');
						return;
					}
					if (income === '') {
						alert('you need to enter an income');
						return;
					}

					if (income && activeButton1 === false && activeButton2 === false) {
						alert('you need to chose income type');
						return;
					} else {
						setTab('income');
						dispatch(calculate());
					}
				}}
			>
				<span className="mr-2">Calculate</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-5 h-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
					/>
				</svg>
			</button>
		</section>
	);
}

export default IncomeDetails;
