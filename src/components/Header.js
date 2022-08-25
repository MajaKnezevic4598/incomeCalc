import React from 'react';

function Header({ active }) {
	return (
		<>
			<header className="flex p-4 items-center mb-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10 mr-3"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
					/>
				</svg>
				<h3 className="text-xl font-bold">Income tax calculator</h3>
				{active === 'income' ? (
					<div className="ml-auto border border-gray-300 text-green-500 py-2 px-6  rounded-md text-sm flex hover:cursor-pointer ">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4 mr-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
								/>
							</svg>
						</span>
						<span>download</span>
					</div>
				) : null}
			</header>
		</>
	);
}

export default Header;
