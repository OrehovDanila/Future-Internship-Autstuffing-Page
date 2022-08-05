import { createSelector } from 'reselect';

export const testPM = state => state.testPM;

export const questions = state => testPM(state).questions;
export const answers = state => testPM(state).answers;
export const diploma = state => testPM(state).diploma;
export const isSended = state => testPM(state).isSended;
export const isError = state => testPM(state).isError;
export const isFetching = state => testPM(state).isFetching;
export const answersCount = state => answers(state).length;

export const answersStat = createSelector(answers, answers =>
	answers.map(answer => {
		return {
			questionId: answer.questionId,
			variants: [answer.answerId],
		};
	})
);

export const correctAnswersCount = createSelector(answers, questions, (answers, questions) =>
	questions.reduce((count, question) => {
		const variant = answers.find(answer => question.questionId === answer.questionId)?.answerId;
		const isTrue = question.variants.find(v => variant === v.id)?.isTrue;
		return isTrue ? count + 1 : count;
	}, 0)
);
