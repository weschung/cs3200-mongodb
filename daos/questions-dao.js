const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(questionId)
const findQuestionsForQuiz = (qzid) => questionsModel.findById(quizId)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }