var mongoose = require('mongoose');

var SurveySchema = mongoose.Schema({
  username:String,
  question:String,
  option1: {description:{type:String}, vote:{type:Number}},
  option2: {description:{type:String}, vote:{type:Number}},
  option3: {description:{type:String}, vote:{type:Number}},
  option4: {description:{type:String}, vote:{type:Number}}
}, {timestamps: true})

mongoose.model('surveys', SurveySchema);
//validations
SurveySchema.path('question').required(true, 'quetion cannot be blank');
