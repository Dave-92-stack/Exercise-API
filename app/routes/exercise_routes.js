const express = require('express')
const passport = require('passport')

const Exercise = require('../models/exercise')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /exercise
router.get('/exercise', requireToken, (req, res, next) => {
  Exercise.find()
    .then(exercises => {
      return exercises.map(exercise => exercise.toObject())
    })
    .then(exercises => res.status(200).json({ exercises: exercises }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
router.get('/exercises/:id', requireToken, (req, res, next) => {
  Exercise.findById(req.params.id)
    .then(handle404)
    .then(exercise => res.status(200).json({ exercise: exercise.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
router.post('/exercises', requireToken, (req, res, next) => {
  req.body.exercise.owner = req.user.id

  Exercise.create(req.body.exercise)
    .then(exercise => {
      res.status(201).json({ exercise: exercise.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/exercises/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.exercise.owner

  Exercise.findById(req.params.id)
    .then(handle404)
    .then(exercise => {
      requireOwnership(req, exercise)

      return exercise.updateOne(req.body.exercise)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
router.delete('/exercises/:id', requireToken, (req, res, next) => {
  Exercise.findById(req.params.id)
    .then(handle404)
    .then(exercise => {
      requireOwnership(req, exercise)
      exercise.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
