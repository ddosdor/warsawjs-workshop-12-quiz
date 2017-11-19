export const getQuestionIndexByTitle = (title, questions) =>
  questions.findIndex(question => question.title === title);