import React from 'react';

function Header() {
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
			</header>
		</>
	);
}

export default Header;
