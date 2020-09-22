const express = require('express')
const router = express.Router() // To routes

const passport = require('passport')

router.get('/signin', (req, res) => {
  res.render('auth/signin')
})

router.post('/signin', (req, res, next) => {
  passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next)
})

router.get('/signup', (req, res) => { // Show page
  res.render('auth/signup')
})

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile', 
  failureRedirect: '/signup',
  failureFlash: true
}))

router.get('/profile', (req, res) => {
  res.send('Profile')
})

module.exports = router

