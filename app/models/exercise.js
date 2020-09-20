const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  date: {
    type: String,
    required: false
  },
  benchPressWeight: {
    type: Number,
    required: true
  },
  benchPressReps: {
    type: Number,
    required: true
  },
  backSquatWeight: {
    type: Number,
    require: true
  },
  backSquatReps: {
    type: Number,
    require: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

exerciseSchema.virtual('fitnessDate').get(() => {
  return moment(this.date).fromat('MMM Do YY')
})

module.exports = mongoose.model('Exercise', exerciseSchema)
