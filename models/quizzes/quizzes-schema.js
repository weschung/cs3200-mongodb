const mongoose = require('mongoose')
const quizzesSchema = mongoose.Schema({
    title: String,
    quizId: String,
    questions: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'QuestionModel'
    }]
}, {collection: 'quizzes'})
module.exports = quizzesSchema