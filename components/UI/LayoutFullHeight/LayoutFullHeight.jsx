import React from 'react';

const LayoutFullHeight = ({ children }) => {
	return (
		<>
			{children}
			<style global jsx>
				{`
					:root {
						--app-height 100vh
					}
					html,
					body,
					body > div:first-child,
					div#__next {
						min-height: 100%;
						min-height: var(--app-height);
					}
					div#__next {
						display: flex;
						flex-direction: column;
					}
					div#__next > main {
						flex-grow: 1;
					}
				`}
			</style>
		</>
	);
};

export default LayoutFullHeight;
