import React from 'react';
import s from './Suggestion.styl';

const Suggestion = ({ children, emoji = 'palez' }) => {
	return (
		<div className={s.wrap} style={{ backgroundImage: `url('/static/emojis/${emoji}.png')` }}>
			{children}
		</div>
	);
};

export default Suggestion;
