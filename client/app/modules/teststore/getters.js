export default {
	current: state => state.questions[state.currentIndex],

	currentIndex: state => state.currentIndex,

	currentAnswer: state => state.questions[state.currentIndex].answer,

	isLast: state => state.currentIndex + 1 === state.questions.length,

	isFirst: state => state.currentIndex === 0,

	allAnswered: state => state.questions.every(q => q.answer != null),

	totalCount: state => state.questions.length,

	unansweredCount: state => state.questions.filter(q => q.answer == null).length,

	answeredCount: state => state.questions.filter(q => q.answer != null).length,

};
