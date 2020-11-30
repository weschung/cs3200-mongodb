const questionsModel = require('../models/questions/questions-model.js')
const quizzesModel = require('../models/quizzes/quizzes-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qId) => questionsModel.findById(qId)
const findQuestionsForQuiz = (quizId) => quizzesModel.findById(quizId)
    .populate("questions").exec()
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }