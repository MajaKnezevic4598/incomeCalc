import React, { useRef, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome, setPeriod } from '../redux/actions';

function Input() {
	const ref = useRef();
	const inputRef = useRef();

	// const [period, setPeriod] = useState('Monthly');
	const [showMenu, setShowMenu] = useState(false);
	const inputValue = useSelector((state) => state.incomeValue);
	const period = useSelector((state) => state.period);

	const periodArray = ['Weekly', 'Fortnightly', 'Monthly', 'Annually'];

	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(addIncome(e.target.value));
	};

	useEffect(() => {
		const { current } = inputRef;
		const handleFocus = () => {
			ref.current.style.border = '2px solid green';
		};
		const handleBlur = () => {
			ref.current.style.borderColor = '#e5e7eb';
		};
		current.addEventListener('focus', handleFocus);
		current.addEventListener('blur', handleBlur);

		return () => {
			current.removeEventListener('focus', handleFocus);
			current.removeEventListener('blur', handleBlur);
		};
	});
	return (
		<div
			className="flex w-5/6 h-10 border rounded-md items-center text-[14px]"
			ref={ref}
		>
			<div className=" w-[10%]  h-full flex justify-center items-center">$</div>

			<input
				type="number"
				placeholder="e.g. 12.000"
				ref={inputRef}
				className="bg-transparent border-0 block w-[55%]   focus:ring-0 placeholder:text-gray-400 placeholder:italic"
				onChange={handleChange}
				value={inputValue}
			/>

			<div className=" relative w-[35%] bg-gray-300 h-full rounded-r-md ">
				<div className=" h-full flex items-center justify-evenly font-bold ">
					<div>{period}</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 font-bold hover:cursor-pointer"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
							onClick={() => {
								setShowMenu(!showMenu);
							}}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</div>
				</div>
				<div
					className={`absolute top-[120%] w-full  border rounded-md ${
						showMenu ? 'block' : 'hidden'
					} `}
				>
					<div className="flex flex-col  bg-slate-50 py-2 px-1 relative after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:border after:bg-slate-50 after:top-0 after:right-[18px] after:rotate-45 after:mt-[-5px] after:border-r-0 after:border-b-0">
						{periodArray.map((item) => {
							return (
								<p
									key={uuid()}
									id={item}
									onClick={(e) => {
										dispatch(setPeriod(e.currentTarget.id));
										setShowMenu(false);
									}}
									className=" py-1 hover:bg-gray-200 hover:text-green-500 cursor-pointer"
								>
									{item}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Input;
