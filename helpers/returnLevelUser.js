const returnLevelUser = (correctAnswersCount = 0, countOfQuestions = 0, diploma = false) => {
	const count = (correctAnswersCount * 100) / countOfQuestions;
	let level;

	switch (true) {
		case count < 50:
			if (diploma) {
				level = 'новичок';
				break;
			}

			level = ['новичок', '👌🏻'];
			break;

		case count >= 50 && count < 80:
			if (diploma) {
				level = 'продвинутый';
				break;
			}

			level = ['продвинутый', '🤟🏻'];
			break;

		case count >= 80:
			if (diploma) {
				level = 'эксперт';
				break;
			}

			level = ['эксперт', '💪🏻'];
			break;

		default:
			level = '';
	}

	if (level === '') {
		level = diploma ? '' : [];
	}

	return level;
};

export default returnLevelUser;
